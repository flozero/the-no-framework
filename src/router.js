export function matchRoute(currentPath, routes) {
  for (const route in routes) {
      const routePattern = route.split('/').filter(Boolean); // Split and remove empty segments
      const currentPathSegments = currentPath.split('/').filter(Boolean);

      if (routePattern.length !== currentPathSegments.length) {
          continue; // Skip if segment lengths differ
      }

      const params = {};
      const match = routePattern.every((segment, i) => {
          if (segment.startsWith(':')) {
              // Capture dynamic segment value
              const paramName = segment.slice(1);
              params[paramName] = currentPathSegments[i];
              return true;
          }
          return segment === currentPathSegments[i];
      });

      if (match) {
          return { 
              routeHandler: routes[route].page, 
              params, 
              transition: routes[route].transition,
              loading: routes[route].loading
          };
      }
  }
  // Return not found handler or null
  return null;
}


async function handleInitialLoad(routes, selector) {
  const path = window.location.pathname;
  const match = matchRoute(path, routes);

  if (match && match.routeHandler) {
    match.routeHandler(match.params).then(module => {
      document.getElementById(selector).appendChild(module.default(match.params))
    })
  } else {
      console.log("page not found")
      // renderNotFoundPage(); // Or redirect to home if preferred
  }
}

const fakePromise = () =>  new Promise((resolve) => setTimeout(() => resolve(), 2000))

export function routerInit(routes, selector) {
  window.navigation.addEventListener('navigate', (event) => {
    // event.preventDefault();
    event.intercept({
      async handler() {
        const url = new URL(event.destination.url);
        const path = url.pathname;
        const match = matchRoute(path, routes);

        // The URL has already changed, so show a placeholder while
        // fetching the new content, such as a spinner or loading page
        // renderArticlePagePlaceholder();

        const container = document.getElementById(selector)

        if (match.transition) {
          container.classList.add(match.transition)
        }
        if (match.loading) {
          container.innerHTML = match.loading(container)
          await fakePromise()
        }

        container.innerHTML = ""
        const page = await match.routeHandler(match.params)
        container.appendChild(page.default(match.params))
       
      },
    });
  });

  handleInitialLoad(routes, selector);
}

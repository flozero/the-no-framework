export const createComponent = (component_name) => {
    return (options) => {
        const component = document.createElement(component_name);
        const children = options.children || []
        const render = options.render || null
        const _options = Object.keys(options).reduce((acc, key) => {
            if (key !== 'children' && key !== 'render') {
                acc[key] = options[key]
            }
            return acc
        }, {})
      
        if (_options) {
            Object.assign(component, _options);
        }
      
        if (children.length > 0) {
            children.forEach((child, index) => {
                if (typeof child === 'string') {
                    component.innerHTML += child
                    return
                }
                component.appendChild(child);
            });
        }
    
        if (render) render(component, options)
    
        return component
    }
}

import { div, svg, button, path, span, a } from "../base"

export const navbar = (props) => {
  return div({
    classList: ["bg-gray-800"],
    children: [
      div({
        classList: ["mx-auto", "max-w-7xl", "px-2", "sm:px-6", "lg:px-8"],
        children: [
          div({
            classList: ["relative", "flex", "h-16", "items-center", "justify-between"],
            children: [
              div({
                classList: ["absolute", "inset-y-0", "left-0", "flex", "items-center", "sm:hidden"],
                children: [
                  button({
                    type: "button",
                    classList: ["relative", "inline-flex", "items-center", "justify-center", "rounded-md", "p-2", "text-gray-400", "hover:bg-gray-700", "hover:text-white", "focus:outline-none", "focus:ring-2", "focus:ring-inset", "focus:ring-white"],
                    attributes: { "aria-controls": "mobile-menu", "aria-expanded": "false" },
                    children: [
                      span({ classList: ["absolute", "-inset-0.5"] }),
                      span({ classList: ["sr-only"], children: ["Open main menu"] }),
                      svg({
                        classList: ["block", "h-6", "w-6"],
                        attributes: { fill: "none", viewBox: "0 0 24 24", "stroke-width": "1.5", stroke: "currentColor", "aria-hidden": "true" },
                        children: [
                          path({ attributes: { "stroke-linecap": "round", "stroke-linejoin": "round", d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" } })
                        ]
                      }),
                      svg({
                        classList: ["hidden", "h-6", "w-6"],
                        attributes: { fill: "none", viewBox: "0 0 24 24", "stroke-width": "1.5", stroke: "currentColor", "aria-hidden": "true" },
                        children: [
                          path({ attributes: { "stroke-linecap": "round", "stroke-linejoin": "round", d: "M6 18L18 6M6 6l12 12" } })
                        ]
                      })
                    ]
                  })
                ],
              }),
            ],
          }),
        ],
      }),
      div({
        classList: ["sm:hidden"],
        attributes: { id: "mobile-menu" },
        children: [
          div({
            classList: ["space-y-1", "px-2", "pb-3", "pt-2"],
            children: [
              a({
                href: "#",
                classList: ["bg-gray-900", "text-white", "block", "rounded-md", "px-3", "py-2", "text-base", "font-medium"],
                attributes: { "aria-current": "page" },
                children: ["Dashboard"]
              }),
              a({
                href: "#",
                classList: ["text-gray-300", "hover:bg-gray-700", "hover:text-white", "block", "rounded-md", "px-3", "py-2", "text-base", "font-medium"],
                children: ["Team"]
              }),
              a({
                href: "#",
                classList: ["text-gray-300", "hover:bg-gray-700", "hover:text-white", "block", "rounded-md", "px-3", "py-2", "text-base", "font-medium"],
                children: ["Projects"]
              }),
              a({
                href: "#",
                classList: ["text-gray-300", "hover:bg-gray-700", "hover:text-white", "block", "rounded-md", "px-3", "py-2", "text-base", "font-medium"],
                children: ["Calendar"]
              }),
            ]
          })
        ]
      }),
    ]
  })
}

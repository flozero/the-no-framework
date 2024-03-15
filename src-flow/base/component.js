import { subscribe } from "../state"

export const createComponent = function(componentName) {
    return function({
        listen = [],
        options,
        children = []
    }) {

        const render = function ({options, state}) {
            const component = document.createElement(componentName)
            if (options && options.innerText && typeof options.innerText === "function") {
                component.innerText = options.innerText(state)
            }
            return component
        }

        return {
            init: function(state) { 
                return {
                    component: render({options, state}),
                    render,
                    listen,
                    options,
                    children
                }
            }
        }
    }
}

export const createParent = function(opts) {
    return {
        render: function(children, state, arr = []) {

            const final = children.map((child) => {
                const { component, render, listen, options, children } = child.init(state)
                const _children = this.render(children, state)
                component.appendChild(_children)
                subscribe(() => {
                    const _tmp = render({ options, state})
                    component.replaceWith(_tmp)
                }, listen)
                return component
            })
            
           
            return final
        },
        init: function(selector) {
            const parent = document.querySelector(selector) || document.body
            const { state, children } = opts
            const tree = this.render(children, state)
          
            // parent.replaceWith(tree)
            // opts.children.forEach((child ) => {
            //     let old = null
            //     const { component, render, listen, options, children } = child.init(opts.state)
            //     parent.appendChild(component)
            //     old = component

            //     console.log(children)

            //     children.forEach((_child) => {
            //         let old = null
            //         const { component: _component, render, listen, options, children } = _child.init(opts.state)
            //         component.appendChild(_component)
            //         old = _component

            //         subscribe(() => {
            //             const _tmp = render({ options, state: opts.state})
            //             old.replaceWith(_tmp)
            //             old = _tmp
            //         }, listen)
            //     })

            //     subscribe(() => {
            //         const _tmp = render({ options, state: opts.state})
            //         old.replaceWith(_tmp)
            //         old = _tmp
            //     }, listen)
            // })
        }
    }
}
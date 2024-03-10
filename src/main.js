import { useState } from './state'
import './style.css'

const $ = (selector) => document.querySelector(selector)

const div = (options = {}) => {
    const div = document.createElement('div');
    const children = options.children || []
    const _options = Object.keys(options).reduce((acc, key) => {
        if (key !== 'children') {
            acc[key] = options[key]
        }
        return acc
    }, {})

    if (_options) {
        Object.assign(div, _options);
    }
    console.log(_options, children)

    if (children.length > 0) {
        console.log('children', children)
        children.forEach((child, index) => {
            div.appendChild(child);
        });
    }

    return div;
};

const button = (options = {}) => {
    const button = document.createElement('button');
    const children = options.children || []
    const _options = Object.keys(options).reduce((acc, key) => {
        if (key !== 'children') {
            acc[key] = options[key]
        }
        return acc
    }, {})

    if (_options) {
        Object.assign(button, _options);
    }

    if (children.length > 0) {
        children.forEach((child, index) => {
            button.appendChild(child);
        });
    }

    return button;
};

const [state] = useState()

const createComponent = (cb, component) => {
    if (typeof cb === 'function') {
        cb(component)
        return component
    } else {
        return cb
    }
}

const renderMultiple = () => {
    const ret = []
    for (let i = 0; i < 10; i++) {
        ret.push(createComponent(div({
            innerText: 'Hello'
        })))
    }
    return ret
}

const app = () => createComponent(div({
    classList: [],
    children: [
        createComponent(button({
            classList: ["btn-blue"],
            innerText: 'Click me',
            onclick: () => {
                state.count += 1
            }
        })),
        createComponent((cmp) => {
            const [state] = useState(() => {
                cmp.innerText = state.count
            }, ["count"])
        
        }, div({
            innerText: state.count
        })),
        ...renderMultiple()
    ]
}))

document.body.appendChild(app())
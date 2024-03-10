import { useState } from './state'
import './style.css'
import { createComponent, div, button } from './components'	

const $ = (selector) => document.querySelector(selector)

const [state] = useState()


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
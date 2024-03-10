import { useState } from './state'
import './style.css'
import {button} from './components/base/button'	
import { div } from './components/base/div'

const $ = (selector) => document.querySelector(selector)

const [state] = useState()


const fakePromise = () => new Promise((resolve) => {
    setTimeout(() => {
        resolve()
    }, 4000)
})

fakePromise().then(() => {
    state.loading = "Done"
})

const app = () => div({
    classList: [],
    children: [
        button({
            classList: ["btn-blue"],
            innerText: 'Click me',
            onclick: () => {
                state.count += 1
            }
        }),
        div({
            classList: ["bg-red-500"],
            innerText: state.count,
            children: [
                div({
                    classList: ["bg-green-500"],
                    innerText: 'Hello',
                    render: (el) => {
                        const [state] = useState(() => {
                            el.innerText = state.count
                        }, ["count"])
                    },
                }),
                div({
                    classList: ["bg-green-500"],
                    innerText: 'World'
                }),
                div({
                    classList: ["bg-green-500"],
                    innerText: state.loading,
                    render: (el) => {
                        useState(() => {
                            el.innerText = state.loading
                        }, ["loading"])
                    }
                })
            ]
        })
    ]
})

document.body.appendChild(app())

import { div, button, span } from "./base"
import { createParent } from "./base/component"
import { defineState } from "./state"

const state = defineState({
    count: 0,
    secondCount: 0
})

const cmp = div({
    children: [
        span({
            listen: ["count"],
            options: {
                innerText: (state) => {
                    return state.secondCount
                }
            }
        }),
        span({
            children: [
                div({
                    listen: ["secondCount"],
                    options: {
                        innerText: (state) => {
                            return state.secondCount
                        }
                    }
                })
            ]
        })
    ]
})

const parent = createParent({
    state,
    children: [
        cmp,
        cmp,
        span({
            options: {
                innerText: (state) => {
                    return state.secondCount
                }
            }
        })
    ]
})


parent.init("[data-component='component-awesome-two']")
const btn = document.createElement("button")
btn.innerText = "click me"
btn.onclick = () => {
    state.count = state.count + 1
}
document.body.appendChild(btn)

const two = document.createElement("button")
two.innerText = "click me"
two.onclick = () => {
    state.secondCount = state.secondCount + 1
}
document.body.appendChild(two)
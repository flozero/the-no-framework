import { useState } from "../state"

const [state] = useState()

const counterPage = () => ({
    js: () => {
        const fakePromise = () => new Promise((resolve) => {
            setTimeout(() => {
                resolve()
            }, 4000)
        })

        document.getElementById("counter-clik").addEventListener("click", () => {
            state.count++
        })

        useState((state) => {
            document.getElementById("counter-clik").innerText = `Clicked ${state.count} times`
        }, ["count"])

        useState((state) => {
            document.getElementById("counter-loading").innerText = `${state.loading}`
        }, ["loading"])

        fakePromise().then(() => {
            state.loading = "Done"
        })
    },
    render() {
        return `
            <button id="counter-clik">Click me</button>
            <div id="counter-loading">${state.loading}</div>
            <div>${state.count}</div>
        `
    }
})


export default counterPage

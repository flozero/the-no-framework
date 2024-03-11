import { div, button, span } from "../components/base"
import { useState } from "../state"

const counterPage = () => {

  const [state] = useState()

  const fakePromise = () => new Promise((resolve) => {
      setTimeout(() => {
          resolve()
      }, 4000)
  })


  fakePromise().then(() => {
    state.loading = "Done"
})

  return div({
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
            children: [
                "<div>hello</div>",
                div({
                    classList: ["bg-green-500"],
                    innerText: 'Hello',
                    render: (el) => {
                        const [state] = useState(() => {
                            el.innerText = state.count
                        }, ["count"])
                    },
                }),
                span({
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
}


export default counterPage

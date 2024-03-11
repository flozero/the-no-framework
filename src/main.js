import './style.css'
import { routerInit } from './router'
import { button, div } from './components/base'

const routes = {
    "/": {
        transition: "slideIn",
        page: () => import("./pages/home"),
        loading: (container) => container.innerHTML = "<div>loading</div>"
    },
    "/count": {
        transition: "slideUp",
        page: () => import("./pages/counter"),
        loading: (container) => container.innerHTML = "<div>loading</div>"
    }
}

document.getElementById("nav").appendChild(
    div({
        children: [
            button({ 
                classList: ["btn-blue"],
                children: ["Home"],
                render: (a) => {
                    a.addEventListener("click", (e) => {
                        e.preventDefault()
                        window.navigation.navigate("/")
                    })
                }
            }),
            button({ 
                classList: ["btn-blue"],
                children: ["Count"],
                render: (a) => {
                    a.addEventListener("click", (e) => {
                        e.preventDefault()
                        window.navigation.navigate("/count")
                    })
                }
            }),
        ]
    
    })
)

routerInit(routes, "app")


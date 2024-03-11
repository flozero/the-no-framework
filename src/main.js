import './style.css'
import { routerInit } from './router'
import { navbar } from './components/molecules/navbar'

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
    navbar()
)

routerInit(routes, "app")


// import { MyCustomElement } from './compOne';
// import { MyCustomElementSecond } from './compTwo';
import { useState } from '../../src/state';
import '../../src/style.css'

// Define the custom element with tag name 'my-custom-element'
// customElements.define('bonjour-first', MyCustomElement);
// customElements.define('bonjour-second', MyCustomElementSecond);

const $ = (selector) => document.querySelector(selector)
const $$ = (selector) => document.querySelectorAll(selector)

const _elements = {
    count: $('#count'),
    // countTwo: $('#countTwo'),
    button: $('#button'),
    // buttonTwo: $('#buttonTwo')
}

const [state, unsubscribe] = useState((state) => {
    if (state.count > 5) {
        console.log('unsubscribing')
        unsubscribe()
    }
    _elements.count.innerText = state.count
}, ["count"])

_elements.button.onclick = () => {
    state.count += 1
}
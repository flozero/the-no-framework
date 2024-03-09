import { MyCustomElement } from './compOne';
import { MyCustomElementSecond } from './compTwo';
import './style.css'

// Define the custom element with tag name 'my-custom-element'
customElements.define('bonjour-first', MyCustomElement);
customElements.define('bonjour-second', MyCustomElementSecond);
  
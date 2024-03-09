import { useState } from "./state";

export class MyCustomElement extends HTMLElement {
    constructor() {
      super();
  
      const state = useState((state) => {
        text.innerText = state.count
      }, ["count"])
  
      const button = Object.assign(
        document.createElement('button'),
        { innerHTML : 'button' ,
          id:'button-1',
          classList: ["btn-blue"],
          innerText: "Click me",
          onclick: () => {
            state.count += 1
          }
        }
      )
      const text = Object.assign(
        document.createElement('p'),
        {
          id:'text-1',
          innerText: state.count
        }
      )
      
      this.appendChild(button);
      this.appendChild(text);
    }
  
    //   connectedCallback() {
    //   console.log('connected')
    // }
    
    // disconnectedCallback() {
    //   console.log('disconnected')
    // }
    
    // attributeChangedCallback(name, oldValue, newValue) {
    //   console.log('attributeChanged', name, oldValue, newValue)
    // }
    
    // static get observedAttributes() {
    //   return ['name']
    // } 
  }
  
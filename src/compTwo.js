import { useState } from "./state";

export class MyCustomElementSecond extends HTMLElement {
    constructor() {
      super();
  
      const [state, unsubscribe] = useState((state) => {
        if (state.countTwo > 5) {
          console.log('unsubscribing'	)
          unsubscribe()
        }
        text.innerText = state.countTwo
      }, ["countTwo"])


  
      const button = Object.assign(
        document.createElement('button'),
        { innerHTML : 'button' ,
          id:'button-2',
          classList: ["bg-red-600"],
          innerText: "Click me",
          onclick: () => {
            state.countTwo += 1
          }
        }
      )
      const text = Object.assign(
        document.createElement('p'),
        {
          id:'text-2',
          innerText: state.countTwo
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
  
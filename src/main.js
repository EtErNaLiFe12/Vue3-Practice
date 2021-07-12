import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

const buttons = document.querySelectorAll('button');
const displayElement = document.querySelector('input');

class Calculator {
  constructor(displayElement) { 
      this.displayElement = displayElement
      this.clear()
  }    

  appendNumber(number) {
      this.displayCont += number
  }

  appendOperator(operator) {            
      this.displayCont += operator
  }

  updateDisplay() {
      this.displayElement.value = this.displayCont
  }

  clear() {
      this.displayCont = ''
      this.displayElement.value = 0
  }
}

const calculator = new Calculator(displayElement)

buttons.forEach(button => {
  button.addEventListener('click', () => {
      switch (button.dataset.type) {
          case 'operator':
              calculator.appendOperator(button.innerText)
              calculator.updateDisplay()
              break
          case 'back':
              calculator.clear()
              break
          case 'reset':
              calculator.clear()
              break
          case 'enter':
              console.log('enter')
              break
          default:
              calculator.appendNumber(button.innerText)
              calculator.updateDisplay()
              break
      }
  })      
})
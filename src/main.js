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
      this.displayContent += number
  }

  appendOperator(operator) {            
      this.displayContent += operator
  }

  updateDisplay() {
      this.displayElement.value = this.displayContent
  }

  clear() {
      this.displayContent = ''
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
          case 'ac':
              calculator.clear()
              break
          case 'equals':
              console.log('equals')
              break
          default:
              calculator.appendNumber(button.innerText)
              calculator.updateDisplay()
              break
      }
  })      
})
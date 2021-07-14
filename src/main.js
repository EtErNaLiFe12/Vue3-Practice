import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

const buttons = document.querySelectorAll('button');
const displayElement = document.querySelector('input');

class Calculator {
  constructor(displayElement) { 
      this.displayElement = displayElement // 인수 초기화
      this.operatorCheck = true // 연산자 중복 방지 확인 = true로 초기화
      this.enterCheck = true // enter 누름시 함수 빠져나가기 (아무런 값 없이 enter시)
      this.clear() // clear 메소드 실행
  }    
  appendNumber(number) {
      this.displayContent += number
      this.operatorCheck = false
      this.enterCheck = false
  }
  subNumber() {
        // substring() 메소드를 통해 맨 첫번째 또는 맨 뒤의 값을 제거 해줌
       this.displayContent = this.displayElement.value.substring(0, this.displayElement.value.length-1)
       this.operatorCheck = false
       this.enterCheck = false
  }
  appendOperator(operator) {
      if(this.operatorCheck) { // 만약 연산자가 true가 될경우에는 함수 빠져나가기
          return
      }
      this.displayContent += operator
      this.operatorCheck = true
      this.enterCheck = false
  }
  compute() {
    if(this.enterCheck) {
        return
    }
    this.enterCheck = false
    this.displayContent = eval(this.displayContent)   // eval() 함수를 통해 계산 - 예) let a = 2 + 3 + 5; console.log(eval(a)); = 9 / 포함되어있는 문자들을 계산하는 함수
    }
  updateDisplay() {
      this.displayElement.value = this.displayContent // input 요소에 displayContent 값을 넣는다.
  }
  clear() {
      // reset시 또는 초기상태
      this.displayContent = '' 
      this.displayElement.value = '0'
      this.enterCheck = true
  }
}

// 객체 생성 및 인스턴스 생성
const calculator = new Calculator(displayElement)

//forEach문으로 각 버튼 연결
buttons.forEach(button => {
  button.addEventListener('click', () => {
      //switch문을 통해 button에 지정한 dataset.type 값으로 구분하여 메소드 실행 
      switch (button.dataset.type) {
          case 'operator':
              calculator.appendOperator(button.innerText)
              calculator.updateDisplay()
              break
          case 'back':
              calculator.subNumber(),
              calculator.updateDisplay()
              break
          case 'reset':
              calculator.clear()
              break
          case 'enter':
              calculator.compute()
              calculator.updateDisplay()
              break
          default:
              calculator.appendNumber(button.innerText)
              calculator.updateDisplay()
              break
      }
  })      
})

// eval() 함수 예제
let a = '안녕 내 나이는' 
let b = '10 + 19 * 10 * 0.1'
let c = '살이야'
console.log(a + eval(b) + c);
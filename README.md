# Vue3 Practice 공간 

## 현재 repository에서는 vue3 관련 practice 공간 입니다.

 - vue3 framework 사용
 - vue3 component unit design 


## Vue.js directive

### v-bind
```html
  <!-- 전체 문법 -->
  <a v-bind:href="url"> ... </a>

  <!-- 약어 -->
  <a :href="url"> ... </a>

  <!-- 동적 전달인자와 함께 쓴 약어 -->
  <a :[key]="url"> ... </a>
```
 - v-bind:class="main-con" ==> :class="main-con"
 - v-bind:id="main" ==> :id="main"
 - :class="{txtCol : isbgOn}"
 <!--동적 전달인자-->
 - :[attr]="'main-con no-drag'"

---
### v-on
```html
  <!-- 전체 문법 -->
  <a v-on:click="doSomething"> ... </a>

  <!-- 약어 -->
  <a @click="doSomething"> ... </a>

  <!-- 동적 전달인자와 함께 쓴 약어 -->
  <a @[event]="doSomething"> ... </a>
```
 - v-on:click="update" ==> @click="update"
 <!--동적 전달인자-->
 - @[event]="update" <!-- 클릭이벤트 1개시-->
 - @[event]="update(), addEl()" <!-- 클릭이벤트 1개이상시 -->

---
### v-if(v-if 디렉티브는 표현식 seen 값의 참, 거짓 여부를 바탕으로 엘리먼트를 삽입하거나 제거합니다.)
 
 - v-if="seen"

---


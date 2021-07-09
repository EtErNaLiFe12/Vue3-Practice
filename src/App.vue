<template>
  <!-- top-container -->
  <div class="top-container">
    <!-- main-con part -->
    <div
      @[event]="handler"
      :[attr]="'main-con no-drag'">
      <div class="text">
        {{ msg }}
      </div>
    </div>

    <!-- btn-container part -->
    <div
      :[attr]="'btn-con no-drag'">
      숫자카운트={{ count }}
    </div>

    <div class="btn_button">
      <!-- btn-plus -->
      <button
        :[attr]="plus"
        @[event]="countEl">
        {{ signP }}
      </button>
      <!-- btn-minus -->
      <button
        :[attr]="minus"
        @[event]="countmEl">
        {{ signM }}
      </button>
    </div>
  </div>

  <div class="middle-container">
    <div class="cal">
      <span>{{ msg1 }}</span>
      <input
        :id="'rv'"
        type="text"
        placeholder="입력하세요" />
      <div class="numbers">
        <button
          class="zero"
          @[event]="resultEl">
          0
        </button>
        <button class="one">
          1
        </button>
        <button class="two">
          2
        </button>
        <button class="multiple">
          *
        </button>
        <button class="three">
          3
        </button>
        <button class="four">
          4
        </button>
        <button class="five">
          5
        </button>
        <button class="divide">
          /
        </button>
        <button class="six">
          6
        </button>
        <button class="seven">
          7
        </button>
        <button class="eight">
          8
        </button>
        <button class="plus">
          +
        </button>
        <button class="back">
          back
        </button>
        <button class="nine">
          9
        </button>
        <button class="reset">
          reset
        </button>
        <button class="substract">
          -
        </button>
        <button
          class="enter"
          @[event]="resultEl">
          enter
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// import HelloWorld from '~/components/HelloWorld'

let num = [0,1,2,3,4,5,6,7,8,9];

export default {
  
  data() {
    return {
      attr: 'class',
      event: 'click',
      msg: 'Vue.js Practice',
      plus: 'btn-plus',
      minus: 'btn-minus',
      count: 1,
      signP: '+',
      signM: '-',
      msg1: 'calcuator',
      zero: num[0],
      one: num[1],
      two: num[2],
      three: num[3],
      four: num[4],
      five: num[5],
    }
    
  },
  methods: {
    handler() {
      this.msg += '!'
    },
    countEl() {
      this.count += 1
    },
    countmEl() {
      this.count -= 1
    },
    numberEl() {
      let num = [0,1,2,3,4,5,6,7,8,9];
      return num;
    },
    addEl() {
      let num = [0,1,2,3,4,5,6,7,8,9]  
      for(let i = 0; i < num.length; i++) {
        let result = num[i] + num[i];
        return result;
      }
      console.log(this.result);
    },
    subEl() {
      let num = [0,1,2,3,4,5,6,7,8,9]
      for(let i = 0; i < num.length; i++) {
        let result = num[i] - num[i];
        return result;
      }
      console.log(this.result);
    },
    mutipleEl() {
      let num = [0,1,2,3,4,5,6,7,8,9]
      for(let i = 0; i < num.length; i++) {
        let result = num[i] * num[i];
        return result;
      }
      console.log(this.result);
    },
    divide() {
      let num = [0,1,2,3,4,5,6,7,8,9]
      for(let i = 0; i < num.length; i++) {
         let result = num[i] / num[i];
        return result;
      }
      console.log(this.result);
    },
    resultEl() {
      return this.result;
    },
  }
}
</script>

<style lang="scss" scoped>

$color1: #bae;
$color2: #fb5849;
$color3: #fff;
$color4: #000;
$color5: mix(#fb5849, #fff);

.top-container {
  position: relative;
  width: 100%;
  height: 400px;
    .main-con {
      position: absolute;
      width: 1500px;
      height: 100px;
      top: 100px;
      left:0;
      right: 0;
      margin: 0 auto;
        .text {
          margin: 0 auto;
          display: flex;
          width: 1000px;
          height: 100px; 
          justify-content: center;
          align-items: center;
          font-size: 60px;       
          color: $color5;
        }
    }
    .btn-con {
      position: absolute;
      width: 1000px;
      height: 50px;
      top: 60%;
      left: 50%;
      transform: translate(-50%,-50%);
      text-align: center;
      line-height: 50px;
      color: $color2;
      font-size: 30px;
      font-weight: 700;
    }
    .no-drag {
      -ms-user-select: none; 
      -moz-user-select: none; 
      -webkit-user-select: none; 
      -khtml-user-select: none; 
      user-select:none;
    }
    .btn_button {
      position: absolute;
      bottom: 10px;
      left: 50%;
      transform: translate(-50%);
        .btn-plus {        
          bottom: 10px;
          width: 100px;
          height: 50px;
          border: 0;
          border-radius: 5px;
          background-color: $color2;
          font-size: 30px;
          margin: 10px;
        }
        .btn-minus {
          bottom: 10px;
          width: 100px;
          height: 50px;
          border: 0;
          border-radius: 5px;
          background-color: $color1;
          font-size: 30px;
          margin: 10px;
        }
    }
    
}

$h: 100px;

.middle-container {
  position: relative;
  top: 60px;
  width: 320px;
  height: 370px;
  margin: 0 auto;
  background-color: $color5;
  border-radius: 25px;
  .cal {
    position: absolute;
    width: 200px;
    height: $h;
    top: 0;
    left: 50%;
    transform: translate(-50%);
      input {
        position: absolute;
        left: 50%;
        transform: translate(-50%);
        width: 250px;
        height: 30px;
        text-align: center;
        border-radius: 5px;
        border: 1px solid $color5;
      }
      span {
        display: flex;
        width: 200px;
        height: $h;
        line-height: $h;
        font-size: 2em;
        font-weight: 700;
        color: $color3;
        text-transform: uppercase;
        justify-content: center;
        align-items: center;
      }
      .numbers {
        position: absolute;
        left: 50%;
        transform: translate(-50%);
        top: 150px;
        width: 250px;
        height: 200px;
        flex-wrap: wrap;
        text-align: center;
          button {
            width: 50px;
            height: 30px;
            border: 1px solid $color5; 
            border-radius: 5px;
            margin: 5px;
            cursor: pointer;
          }
          .enter {
            width: 230px;
          }
      }
  }

}
</style>
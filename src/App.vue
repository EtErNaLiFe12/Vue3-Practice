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
        type="text" />
      <div class="numbers">
        <button
          class="zero"
          @[event]="zeroEl">
          0
        </button>
        <button
          class="one"
          @[event]="oneEl">
          1
        </button>
        <button
          class="two"
          @[event]="twoEl">
          2
        </button>
        <button
          class="multiple"
          data-type="operator"
          @[event]="multiEl">
          *
        </button>
        <button
          class="three"
          @[event]="threeEl">
          3
        </button>
        <button
          class="four"
          @[event]="fourEl">
          4
        </button>
        <button
          class="five"
          @[event]="fiveEl">
          5
        </button>
        <button
          class="divide"
          data-type="operator"
          @[event]="divideEl">
          /
        </button>
        <button
          class="six"
          @[event]="sixEl">
          6
        </button>
        <button
          class="seven"
          @[event]="sevEl">
          7
        </button>
        <button
          class="eight"
          @[event]="eightEl">
          8
        </button>
        <button
          class="plus"
          data-type="operator"
          @[event]="additionEl">
          +
        </button>
        <button
          data-type="back"
          class="back">
          back
        </button>
        <button
          class="nine"
          @[event]="nineEl">
          9
        </button>
        <button
          class="reset"
          data-type="reset">
          reset
        </button>
        <button
          class="subtract"
          data-type="operator"
          @[event]="subtractEl">
          -
        </button>
        <button
          class="enter"
          data-type="enter"
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
let sign = ['+','-','*','/']
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
    zeroEl() {
      return this.result = num[0],
      console.log(this.result)
    },
    oneEl() {
      return this.result = num[1],
      console.log(num[1])
    },
    twoEl() {
      return this.result = num[2],
      console.log(num[2])
    },
    threeEl() {
      return this.result = num[3],
      console.log(num[3])
    },
    fourEl() {
      return this.result = num[4],
      console.log(num[4])
    },
    fiveEl() {
      return this.result = num[5],
      console.log(num[5])
    },
    sixEl() {
      return this.result = num[6],
      console.log(num[6])
    },
    sevEl() {
      return this.result = num[7],
      console.log(num[7])
    },
    eightEl() {
      return this.result = num[8],
      console.log(num[8])
    },
    nineEl() {
      return this.result = num[9],
      console.log(num[9])
    },
    multiEl() {
      return this.result = sign[2],
      console.log(sign[2])
    },
    additionEl() {
      return this.result = sign[0],
      console.log(sign[0])
    },
    subtractEl() {
      return this.result = sign[1],
      console.log(sign[1])
    },
    divideEl() {
      return this.result = sign[3],
      console.log(sign[3])
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
      #rv {
        position: absolute;
        left: 50%;
        transform: translate(-50%);
        background-color: #fff;
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
<template>
  <!-- top-container -->
  <div class="top-container">
    <!-- main-con part -->
    <div
      :[attr]="'main-con no-drag'">
      <div
        class="text"
        :class="{txtCol : isbgOn}">
        {{ msg }}
      </div>
    </div>
    <div
      class="bar"
      :class="{colorChg : isbgOn}"
      @[event]="update"></div>
    <div
      class="side_bar"
      :class="{display : isbgOn}"></div>
  </div>
  <div
    class="middle-container"
    :class="{colorChg : isbgOn}">
    <div class="cal">
      <span>{{ msg1 }}</span>
      <input
        id="rv"
        type="text" />
      <div class="numbers">
        <button
          class="'zero'">
          0
        </button>
        <button
          class="one">
          1
        </button>
        <button
          class="two">
          2
        </button>
        <button
          class="multiple"
          :[typee]="'operator'">
          *
        </button>
        <button
          class="three">
          3
        </button>
        <button
          class="four">
          4
        </button>
        <button
          class="five">
          5
        </button>
        <button
          class="divide"
          :[typee]="'operator'">
          /
        </button>
        <button
          class="six">
          6
        </button>
        <button
          class="seven">
          7
        </button>
        <button
          class="eight">
          8
        </button>
        <button
          class="plus"
          :[typee]="'operator'">
          +
        </button>
        <button
          :[typee]="'back'"
          class="back">
          back
        </button>
        <button
          class="nine">
          9
        </button>
        <button
          class="reset"
          :[typee]="'reset'">
          reset
        </button>
        <button
          class="subtract"
          :[typee]="'operator'">
          -
        </button>
        <button
          class="enter"
          :[typee]="'enter'">
          enter
        </button>
      </div>
    </div>
  </div>
  <VueComp />
</template>

<script>
import VueComp from '~/components/vuecomp'

export default {
  components: {
    VueComp
  },
  data() {
    return {
      isbgOn: false,
      attr: 'class',
      event: 'click',
      msg: 'Vue.js Calculator',
      msg1: 'calcuator',
      typee: 'data-type'
    }
  },
  methods: {
    handler() {
      this.msg += '!'
    },
    update() {
      this.isbgOn = !this.isbgOn;
    }
    // countEl() {
    //   this.count += 1
    // },
    // countmEl() {
    //   this.count -= 1
    // },
  }
}

</script>

<style lang="scss" scoped>

$color1: #3375f0;
$color2: #fb5849;
$color3: #fff;
$color4: #000;
$color5: mix(#fb5849, #fff);
$color6:#bbbbbb;

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
      z-index: 3;
        .text {
          margin: 0 auto;
          display: flex;
          width: 1000px;
          height: 100px; 
          justify-content: center;
          align-items: center;
          font-size: 60px;       
          color: $color5;
          text-transform: uppercase;
        }
        .text.txtCol {
          color: $color1;
         
        }
    }
    .bar {
      position: relative;
      top: 25px;
      left: 25px;
      z-index: 2;      
      transform: translate(-50%, -50%);
      width: 30px;
      height: 30px;
      border-radius: 20%;
      background-color: $color2;
    }
    .bar.colorChg {
      background-color: $color1;
    }
    .side_bar {
      position: fixed;
      top: 0;
      left: 0;  
      width: 1900px;
      height: 900px;
      background-color: rgba(240, 84, 84, 0.3);
      transform: translateY(-900px);
      transition: 1s;
    }
    .side_bar.display {
      transform: translateY(0);
    }
}

$h: 100px;

.middle-container {
  position: relative;
  width: 320px;
  height: 400px;
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
    user-select:none;
      #rv {
        position: absolute;
        left: 50%;
        transform: translate(-50%);
        background-color: #fff;
        width: 250px;
        height: 30px;
        text-align: right;
        padding-right: 10px;
        box-sizing: border-box;
        border-radius: 5px;
        font-size: 16px;
        font-weight: 700;
        border: 1px solid $color3;
        color: #535050;
        user-select:none;
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
        width: 300px;
        height: 250px;
        flex-wrap: wrap;
        text-align: center;
        user-select:none;
          button {
            width: 55px;
            height: 35px;
            color: #535050;
            border: 1px solid $color3; 
            box-sizing: border-box;
            border-radius: 5px;
            font-size: 15px;
            font-weight: 700;
            margin: 3px;
            cursor: pointer;
          }
          button:hover {
            background-color: $color6;
            color: #fff;
          }
          .enter {
            width: 240px;
          }
      }
  }

}

.middle-container.colorChg {
  background-color: $color1;
}
</style>
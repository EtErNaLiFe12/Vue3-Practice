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

    <!-- btn-container part 
    <div
      :[attr]="'btn-con no-drag'">
      숫자카운트={{ count }}
    </div>

    <div class="btn_button">
       btn-plus 
      <button
        :[attr]="plus"
        @[event]="countEl">
        {{ signP }}
      </button>
       btn-minus 
      <button
        :[attr]="minus"
        @[event]="countmEl">
        {{ signM }}
      </button>
    </div>
  </div>-->

    <div class="middle-container">
      <div class="cal">
        <span>{{ msg1 }}</span>
        <input
          :id="'rv'"
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
            :[typee]="'enter'"
            @[event]="resultEl">
            enter
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import HelloWorld from '~/components/HelloWorld'

export default {
  
  data() {
    return {
      attr: 'class',
      event: 'click',
      msg: 'Vue.js Calculator',
      // plus: 'btn-plus',
      // minus: 'btn-minus',
      // count: 1,
      // signP: '+',
      // signM: '-',
      msg1: 'calcuator',
      typee: 'data-type'
    }
  },
  methods: {
    handler() {
      this.msg += '!'
    },
    // countEl() {
    //   this.count += 1
    // },
    // countmEl() {
    //   this.count -= 1
    // },
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
    }
    // .btn-con {
    //   position: absolute;
    //   width: 1000px;
    //   height: 50px;
    //   top: 60%;
    //   left: 50%;
    //   transform: translate(-50%,-50%);
    //   text-align: center;
    //   line-height: 50px;
    //   color: $color2;
    //   font-size: 30px;
    //   font-weight: 700;
    // }
    // .no-drag {
    //   -ms-user-select: none; 
    //   -moz-user-select: none; 
    //   -webkit-user-select: none; 
    //   -khtml-user-select: none; 
    //   user-select:none;
    // }
    // .btn_button {
    //   position: absolute;
    //   bottom: 10px;
    //   left: 50%;
    //   transform: translate(-50%);
    //     .btn-plus {        
    //       bottom: 10px;
    //       width: 100px;
    //       height: 50px;
    //       border: 0;
    //       border-radius: 5px;
    //       background-color: $color2;
    //       font-size: 30px;
    //       margin: 10px;
    //     }
    //     .btn-minus {
    //       bottom: 10px;
    //       width: 100px;
    //       height: 50px;
    //       border: 0;
    //       border-radius: 5px;
    //       background-color: $color1;
    //       font-size: 30px;
    //       margin: 10px;
    //     }
    // }
    
}

$h: 100px;

.middle-container {
  position: relative;
  top: 320px;
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
        border: 1px solid $color5;
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
            border: 1px solid $color5; 
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
</style>
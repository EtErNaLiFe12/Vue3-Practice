<template>
  <div
    class="comp-container"
    @[evt]="addEl(), seenEl()"
    :class="{cc : colorChg}">
    <div
      class="sub-container"
      @[evt]="addEl"
      :class="{cc : colorChg}">
      <ul>
        <li v-if="seen">
          1
        </li>
        <li v-if="seen">
          2
        </li>
        <li v-if="seen">
          3
        </li>
        <li v-if="seen">
          4
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colorChg: false,
      evt: 'click',
      seen: true
      }
  },
  methods: {
    addEl() {
      this.colorChg = !this.colorChg
    },
    seenEl() {
      this.seen = !this.seen
    }
  }
}
</script>

<style lang="scss" scoped>

$col1: #fb5849;
$col2: #696969;

  .comp-container {
    position: relative;
    width: 1500px;
    height: 150px;
    margin: 50px auto;
    border: 1px solid red;
    
    .sub-container {
      position: absolute;
      width: 800px;
      height: 100px;
      top: 0;
      bottom:0;
      left: 0;
      right: 0;
      margin: auto;
      
      ul {
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 3px solid $col2;
        
        li {
          margin: 10px;
          font-size: 30px;
          font-weight: 700;
          color: $col1;
        }

      }

    }

  }
  .cc {
    background-color: $col1;
  }


</style>
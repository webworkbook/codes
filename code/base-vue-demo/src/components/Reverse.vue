<template>
  <div>
    <label>
      <div class="output">{{newValue}}</div>
      <div class="button" @click="reverse">反转{{source}}</div>
    </label>
  </div>
</template>

<script>
export default {
  props: {
    source: String
  },
  data () {
    return {
      result: this.source
    }
  },
  watch: {
    source (val) {
      console.log('source:' + val)
    },
    result (val) {
      console.log('result:' + val)
    },
    newValue (val) {
      console.log('newValue:' + val)
    }
  },
  // 计算属性
  computed: {
    newValue () {
      return this.source.split('').reverse().join('')
    }
  },
  methods: {
    reverse () {
      this.result = this.source.split('').reverse().join('')
    }
  }
}
</script>

<style scoped>
.output {
  font-size: 100px;
  text-align: center;
}
.button {
  font-size: 50px;
  text-align: center;
  border-width: 2px;
  border-color: #ddd;
  background-color: #f5f5f5;
}
</style>

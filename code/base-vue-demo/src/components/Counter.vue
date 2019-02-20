<template recyclable="true">
  <div>
    <div class="output">{{count}}</div>
    <div class="button" @click="inc">+</div>
  </div>
</template>

<script>
export default {
  props: ['start'],
  data () {
    return {
      count: parseInt(this.start, 10) * 2 || 42
    }
  },
  methods: {
    inc () {
      this.count++
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

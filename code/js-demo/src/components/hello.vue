<template>
  <div class="hello">{{ value }}</div>
</template>

<script>
// import { funcA } from '@/utils/hello'
import { funcA as privateFuncA } from '@/utils/hello'

export default {
  name: 'Hello',
  data () {
    return {
      value: ''
    }
  },
  methods: {
    sayHello () {
      
      // this.value = funcA()
      this.value = privateFuncA()
    }
  }
}
</script>

<style>
.hello {
  height: 100px;
  line-height: 100px;
  font-weight: 600;
  font-size: 24px;
  background-color: #ccc;
}
</style>

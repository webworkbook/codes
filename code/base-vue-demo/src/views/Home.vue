<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"></HelloWorld> -->
    <router-link to="/account/login">登录</router-link>
    <Counter start='10'></Counter>
    <Reverse source='hello world'></Reverse>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Counter from '@/components/Counter.vue'
import Reverse from '@/components/Reverse.vue'

export default {
  name: 'home',
  components: {
    // HelloWorld,
    Counter,
    Reverse
  }
}
</script>

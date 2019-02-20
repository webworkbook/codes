<template>
  <div class="index">
    <hello ref="hello"/>
    <span class="button" @click="sayHello">打个招呼</span>
    <br/><br/><br/><br/>
    <user-info></user-info>
    <br/><br/><br/><br/>
    <arrow/>
    <button @click="jumpToClone">to clone</button>
  </div>
</template>

<script>
export default {
  name: 'index',
  methods: {
    sayHello () {
      this.$refs.hello.sayHello()
    },
    jumpToClone () {
      this.$router.push('/clone')
    }
  },
  components: {
    Hello: () => import('@/components/hello'),
    UserInfo: () => import('@/components/user'),
    Arrow: () => import('@/components/arrow')
  }
}
</script>

<style>
.index {
  padding: 20px;
  background: #f2f1f2;
}
</style>

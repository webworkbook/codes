<template>
  <div>
    <input class="login-input" type="text" v-model="userName">
    <input type="button" :value="buttonText" @click="login">
    <Reverse :source='userName'></Reverse>
    <div>{{ testName }}</div>
  </div>
</template>

<script>
import Reverse from '@/components/Reverse.vue'

export default {
  name: 'AccountLogin',
  components: {
    Reverse
  },
  data () {
    return {
      userName: '',
      buttonText: '登录'
    }
  },
  computed: {
    testName () {
      return `${this.userName}-2`
    }
  },
  created () {
    console.log('created')
  },
  beforeCreate () {
    console.log('beforeCreate')
  },
  beforeMount () {
    console.log('beforeMount')
  },
  mounted () {
    console.log('mounted')
  },
  beforeDestroy () {
    console.log('beforeDestroy')
  },
  destroyed () {
    console.log('destroy')
  },
  methods: {
    login () {
      const formData = {
        name: this.userName
      }
      const res = this.$api.Account.login(formData)

      if (res.code === 1) {
        console.log('login success')
        this.$router.replace('/')
      } else {
        alert('login failure')
      }
    }
  }
}
</script>

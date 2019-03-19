<template>
  <div class="about" style="background: #ddd; margin-top: 30px; padding: 15px;">
    <div>name:</div>
    <div>
      <input type="text" v-model="name">
    </div>
    <a href="javascript:;" @click="update(false)">设置</a><br>
    <a href="javascript:;" @click="update(true)">存localStorage</a><br>
    <a href="javascript:;" @click="deleteStore">删localStorage</a><br><br>
    <a href="javascript:;" @click="changeTitle">eventBus</a>
  </div>
</template>

<script>
export default {
  name: 'SetProfile',
  data () {
    return {
      name: ''
    }
  },
  methods: {
    update (isSave) {
      const userInfo = {
        name: this.name
      }
      this.$store.dispatch('updateUserInfo', userInfo)

      if (!isSave) return

      localStorage['USERINFO'] = JSON.stringify(userInfo)
    },
    deleteStore () {
      localStorage.removeItem('USERINFO')
    },
    changeTitle () {
      this.$eventBus.$emit('changeTitle', 'hahaha')
    }
  }
}
</script>

<template>
  <div class="user">
    <div class="userinfo" v-if="user">
      <p>{{ `hello ${user.name}` }}</p>
    </div>
    <p class="mention" v-if="mention">{{ mention }}</p>
    <div class="button" @click="getUserInfo">登录</div>
  </div>
</template>

<script>
export default {
  name: 'userInfo',
  data () {
    return {
      user: null,
      mention: ''
    }
  },
  methods: {
    async getUserInfo () {
      let form = { account: 'admin' }
      const res = await this.$api.request.getUserInfo(form)
      // eslint-disable-next-line
      console.log(res)

      if (res.code === 1) {
        this.mention = ''
        this.user = res.data
      } else {
        this.mention = '用户名错误'
      }
    }
  }
}
</script>

<style>
.userInfo {
  margin: 10px;
  background-color: #f7f7f7;
  height: 400px;
}

.mention {
  color: crimson;
  line-height: 40px;
}
</style>


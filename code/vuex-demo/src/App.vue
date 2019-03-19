<template>
  <div id="app">
    {{msg}}
    <div id="nav">
      <Navbar @changeMessage="changeMessage" :msg.sync="msg" />
    </div>
    <SetProfile />
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  margin-top: 20px;
  padding: 15px;
  background: #eee;
  overflow: hidden;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>

// @ is an alias to /src
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App,lalala.'
    }
  },
  methods: {
    changeMessage (message) {
      this.msg = message
    }
  },
  components: {
    Navbar: () => import('@/components/Navbar'),
    SetProfile: () => import('@/views/SetProfile')
  }
}
</script>

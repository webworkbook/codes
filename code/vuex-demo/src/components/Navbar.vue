<template>
  <div style="text-align:left; overflow:hidden;">
    {{msg}}<a href="javascript:;" @click="changeMessage('12345')" style="margin: 0 10px;">change</a>{{title}}
    <div class="hello" style="float: right;">
      name: {{userInfo.name}}
    </div>
  </div>
</template>
<script>
// import { mapState } from 'vuex';
export default {
  name: 'Navbar',
  data () {
    return {
      title: 'this is title'
    }
  },
  props: {
    msg: String
  },
  mounted () {
    // listener
    this.$eventBus.$on('changeTitle', this.changeTitle)
    // this.$eventBus.$emit('changeTitle','123')  //emit data
  },
  methods: {
    changeMessage (msg) {
      this.$emit('update:msg', msg)
      // this.$emit('changeMessage', msg)
    },
    changeTitle (title) {
      this.title = title
    }
  },
  // data() {
  //   return {
  //     userInfo: this.$store.state.userInfo
  //   }
  // },
  computed: {
    userInfo () {
      // return this.$store.state.account.userInfo
      return this.$store.getters.userInfo
    }
  }

  // computed: mapState({
  //   userInfo: state => state.userInfo
  // })
  // computed: mapState(['userInfo'])
}
</script>

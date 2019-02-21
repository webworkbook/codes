<template>
  <div class="arrow">
    this is show this value component
  </div>
</template>

<script>
import ShowThis from '@/utils/show-this'
export default {
  name: 'arrow',
  data () {
    return {
      value: ''
    }
  },
  methods: {
    showThis () {
      new ShowThis() /* eslint-disable-line */
    }
  },
  mounted () {
    console.log('mounted')
    this.showThis()
  }
}
</script>

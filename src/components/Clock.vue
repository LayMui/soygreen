<template>
  <div class="counter">
    {{ displayedTime }}
  </div>
</template>

<script>
/* eslint-disable no-console */
import moment from 'moment'

export default {
  props: {
    format: {
      type: String,
      default: 'HH:mm:ss'
    }
  },
  data() {
    return {
      currentTime: moment(),
      counter: null
    }
  },
  computed: {
    displayedTime() {
      console.log('[Clock] Computed function')
      return this.currentTime.format(this.format)
    }
  },
  created() {
    this.counter = setInterval(() => {
      this.currentTime = moment()
    }, 1000);
  },
  beforeDestroy () {
    clearInterval(this.counter);
  }
}
</script>

<style scoped>
.counter {
  font-size: 2.5rem;
  font-family: Georgia, serif;
}
</style>
<template>
  <div class="paginator">
    <span v-for="page in pagesCount"
      :key="page"
      class="paginator__page"
      :class="{active: page === activePage}" />
  </div>
</template>

<script>
import pages from '../views/pages'

export default {
  props: {
    activePage: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      pagesCount: pages.length
    }
  }
}
</script>
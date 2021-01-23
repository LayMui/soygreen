<template>
  <div>
    <div>
      <h1 class="text-center site-title">
        {{ this.$route.meta.title }}
      </h1>
      <div class="header-menu">
        <SwitchViews />
        <ShowAside />
      </div>
    </div>
    <div class="p-3">
      <transition name="slide-x" mode="out-in">
        <router-view />
      </transition>
    </div>
    <Pagination :activePage="activePage" />
  </div>
</template>

<script>
import pages from '../views/pages'

import SwitchViews from '../components/SwitchViews'
import ShowAside from '../components/ShowAside'
import Pagination from '../components/Pagination'

export default {
  metaInfo() {
    return {
      title: this.$route.meta.title
    }
  },
  methods: {
    handleKeydown(event) {
      const { key, keyCode } = event
      const isRight = key === 'ArrowRight' || keyCode === 39
      const isLeft = key === 'ArrowLeft' || keyCode === 37
      if (!isRight && !isLeft) return

      if (isRight) this.handleNextPage()
      else this.handlePrevPage()
    },
    handleNextPage() {
      const max = pages.length
      if (this.activePage < max) {
        const nextPage = pages[this.activePage]
        this.$router.push({ name: nextPage.name })
      }
    },
    handlePrevPage() {
      const min = 1
      if (this.activePage > min) {
        const prevPage = pages[this.activePage - 2]
        this.$router.push({ name: prevPage.name })
      }
    }
  },
  computed: {
    activePage() {
      return parseInt(this.$route.path.replace(/\D+/g, ''))
    }
  },
  components: {
    SwitchViews,
    Pagination,
    ShowAside
  },
  mounted() {
    window.addEventListener('keydown', this.handleKeydown)
  },
  beforeDestroy() {
    window.removeEventListener('keydown', this.handleKeydown)
  }
}
</script>

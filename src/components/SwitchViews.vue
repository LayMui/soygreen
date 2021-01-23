<template>
  <div>
    <button class="btn btn-primary mr-1"
      v-for="view in views"
      @click="currentView = view.value"
      :class="{active: currentView === view.value}"
      :key="view.value">
      <component :is="view.icon"></component>
    </button>
  </div>
</template>

<script>
import { TvIcon, MonitorIcon } from 'vue-feather-icons'

export default {
  data () {
    return {
      currentView: 'monitor',
      views: [
        {
          icon: MonitorIcon,
          value: 'monitor'
        },
        {
          icon: TvIcon,
          value: 'tv'
        }
      ]
    }
  },
  watch: {
    currentView () {
      switch (this.currentView) {
        case 'monitor':
          document.documentElement.classList.remove('text-enlarge')
          return
        case 'tv':
          document.documentElement.classList.add('text-enlarge')
          return
        default:
          return
      }
    }
  },
  components: {
    TvIcon,
    MonitorIcon
  }
}
</script>
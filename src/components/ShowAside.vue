<template>
  <div>
    <button class="btn btn-primary" @click="showAside = true">
      <MoreHorizontalIcon />
    </button>
    <div class="app-aside" :class="{show: showAside}">
      <div class="text-right">
        <button class="btn btn-light" @click="showAside = false">
          <XIcon />
        </button>
      </div>
      <div class="app-aside__content">
        <ul class="list-unstyled">
          <li v-for="page in pages" :key="page.name">
            <span class="mr-2 text-muted">{{ page.path }}.</span>
            <router-link :to="{name: page.name}"
              tag="a"
              :class="{active: $route.name === page.name}">{{ page.meta.title }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { MoreHorizontalIcon, XIcon } from 'vue-feather-icons'

import pages from '../views/pages'

export default {
  data() {
    return {
      showAside: false,
      pages: pages
    }
  },
  components: {
    MoreHorizontalIcon,
    XIcon
  },
  watch: {
    '$route'() {
      this.showAside = false
    }
  }
}
</script>
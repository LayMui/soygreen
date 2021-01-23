<template>
  <div>
    <button v-for="instance in data"
      type="button"
      :key="instance.title"
      @click="model = instance.value"
      class="btn btn-danger mr-2"
      :class="{active: model === instance.value}">
      {{ instance.title }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    },
    data: {
      type: Array
    }
  },
  data () {
    return {
      model: this.value
    }
  },
  watch: {
    model () {
      this.$emit('input', this.model)
    }
  }
}
</script>

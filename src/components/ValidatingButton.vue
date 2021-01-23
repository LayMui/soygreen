<template>
  <button :type="type"
    class="btn"
    :class="`btn-${color}`"
    :disabled="disabled || errors.items.length > 0">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'submit'
    },
    color: {
      type: String,
      default: 'primary'
    },
    submitText: {
      type: String,
      default: 'Submit'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>
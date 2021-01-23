<template>
  <p>
    <button type="button" class="btn btn-primary mr-2" @click="$emit('onSuccess')">
      Success
    </button>
    <button type="button" class="btn btn-danger" @click="alertFail">
      Fail
    </button>
  </p>
</template>

<script>
export default {
  methods: {
    alertFail () {
      this.$emit('onFail', 'This is your failure payload')
    }
  }
}
</script>

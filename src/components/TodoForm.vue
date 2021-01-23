<template>
  <form @submit.prevent="handleSubmit">
    <input class="form-control mb-2" placeholder="Name" v-model="model.name">
    <input class="form-control mb-2" placeholder="Description" v-model="model.description">
    <button type="submit"
      class="btn btn-primary"
      :disabled="!model.name || !model.description">
      Save
    </button>
  </form>
</template>

<script>
/* eslint-disable no-console */
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      model: {
        name: '',
        description: ''
      }
    }
  },
  methods: {
    ...mapActions([
      'TODOS_GET',
      'TODO_CREATE'
    ]),
    async handleSubmit() {
      try {
        const response = await this.TODO_CREATE(this.model)
        console.log('New todo has been created!', response)
        this.resetModel()
      } catch (e) {
        console.log('Error', e)
      }
    },
    resetModel() {
      this.model.name = ''
      this.model.description = ''
    }
  },
  mounted() {
    this.TODOS_GET()
  }
}
</script>
<template>
  <table class="table table-hover table-sm" style="width: 100%">
    <thead>
    <tr>
      <th colspan="3" class="pl-2">
        Todo
      </th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="todo in todos" :key="todo.id">
      <td class="pl-2">
        {{ todo.name }}
      </td>
      <td class="pl-2 small tetx-muted">
        {{ todo.description }}
      </td>
      <td class="text-right">
        <button type="button"
          class="btn btn-outline-danger btn-sm"
          @click="handleDelete(todo.id)">
          Finish
        </button>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  methods: {
    ...mapActions([
      'TODO_DELETE'
    ]),
    handleDelete(userId) {
      this.TODO_DELETE(userId)
    }
  },
  computed: {
    ...mapGetters([
      'todos'
    ])
  }
}
</script>
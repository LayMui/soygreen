import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'
import { findIndex } from 'lodash'

import { objectToArray } from './utils';

Vue.use(Vuex)

axios.defaults.baseURL = 'https://vue-brown-bag.firebaseio.com/'

export default new Vuex.Store({
  state: {
    todos: []
  },
  mutations: {
    TODOS_SET(state, todos) {
      state.todos = todos
    },
    TODO_ADD(state, todo) {
      state.todos.push(todo)
    },
    TODO_REMOVE(state, todoId) {
      const index = findIndex(state.todos, { id: todoId })
      state.todos.splice(index, 1)
    }
  },
  actions: {
    async TODOS_GET (context) {
      try {
        const response = await axios.get('/todos.json')
        const normalized = objectToArray(response.data)
        context.commit('TODOS_SET', normalized)
        return response.data
      } catch(e) {
        throw e
      }
    },
    async TODO_CREATE (context, todo) {
      try {
        const response = await axios.post('/todos.json', todo)
        const id = response.data.name
        const newUser = {
          id,
          ...todo
        }
        context.commit('TODO_ADD', newUser)
        return newUser
      } catch(e) {
        throw e
      }
    },
    async TODO_DELETE (context, todoId) {
      try {
        await axios.delete(`/todos/${todoId}.json`)
        context.commit('TODO_REMOVE', todoId)
      } catch(e) {
        throw e
      }
    }
  },
  getters: {
    todos (state) {
      return state.todos
    }
  }
})

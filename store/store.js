import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todoList: []
  },
  mutations: {
    addTodo(state, payload) {
      state.todoList = [...state.todoList, { task: payload, isDone: false }]
    }
  }
})

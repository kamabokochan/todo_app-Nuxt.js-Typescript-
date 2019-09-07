import Vue from 'vue'
import Vuex from 'vuex'
import { todoType } from '~/type/type.ts'

Vue.use(Vuex)

export interface TodosState {
  todoList: todoType[];
}

const state: TodosState = {
  todoList: [],
};

export default new Vuex.Store({
  state: state,
  mutations: {
    addTodo(state, payload) {
      state.todoList = [...state.todoList, { task: payload, isDone: false }]
    }
  }
})

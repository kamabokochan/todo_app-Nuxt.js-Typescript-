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
    addTodo(state, newTask) {
      state.todoList = [...state.todoList, { task: newTask, isDone: false }]
    },
    deleteTodo(state, index) {
      state.todoList.splice(index, 1);
    },
    switchStatus(state, index) {
      state.todoList[index].isDone = !state.todoList[index].isDone;
    },
  }
})

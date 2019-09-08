<template>
  <footer>
    <div class="inputForm">
      <input v-model="inputTodoValue" type="text" />
      <button type="button" @click="addTodo">
        <font-awesome-icon icon="plus-square" />
      </button>
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import store from '~/store/store.ts'

@Component
export default class Footer extends Vue {
  inputTodoValue: string | number = ''
  isFilter: boolean = false
  addTodo() {
    store.commit('addTodo', this.inputTodoValue)
    this.inputTodoValue = ''
  }
}
</script>

<style lang="stylus" scoped>
footer {
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 44px;
  background-color: #333;
  color: #fff;
}

.inputForm {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 25px;
  input[type="text"] {
    width: 80%;
    height: 30px;
    padding: 0 10px;
    border-radius: 30px;
    border: solid 1px #ccc;
    font-size: 16px;
  }
  button {
    font-size: 30px;
    margin-left: 15px;
    svg path {
      fill: #999;
    }
  }
}
</style>

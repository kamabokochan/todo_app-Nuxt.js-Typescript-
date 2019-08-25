<template>
  <footer>
    <div class="inputForm">
      <input v-model="inputTodoValue" type="text" />
      <button type="button" @click="addTodo">+</button>
      <!-- <button type="button" @click="isFilter = !isFilter">
        {{ isFilter ? 'off filter' : 'on filter' }}
      </button> -->
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
  background-color: #999;
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
    border-radius: 30px;
    border: solid 1px #ccc;
    font-size: 16px;
  }
  button {
    width: 60px;
    height: 35px;
    border: solid 1px #ccc;
    border-radius: 6px;
    margin-left: 15px;
  }
}
</style>

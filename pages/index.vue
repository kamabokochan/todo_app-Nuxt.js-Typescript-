<template>
  <div class="todoList">
    <div class="inputForm">
      <input v-model="inputTodoValue" type="text" />
      <button type="button" @click="addTodo">add</button>
      <button type="button" @click="isFilter = !isFilter">
        {{ isFilter ? 'off filter' : 'on filter' }}
      </button>
    </div>
    <ul class="todoListWrap">
      <TodoItem
        v-for="(item, index) in todoList"
        :key="`todo${index}`"
        :item="item"
        :is-filter="isFilter"
      />
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import TodoItem from '~/components/TodoItem.vue'
import store from '~/store/store'

type todoType = {
  task: string | number
  isDone: boolean
}

@Component({
  components: {
    TodoItem
  }
})
export default class Index extends Vue {
  get todoList() {
    return store.state.todoList
  }

  inputTodoValue: string | number = ''

  isFilter: boolean = false

  addTodo() {
    store.commit('addTodo', this.inputTodoValue)
  }
}
</script>

<style lang="stylus" scoped>
* {
  margin 0
  padding 0
}

ul,
li {
  list-style none
}

.inputForm {
  display flex
  align-items center
  justify-content center
  margin 40px 0
  input[type="text"] {
    font-size 16px
  }
  button {
    width: 100px;
    height: 25px;
    border: solid 1px #ccc;
  }
}

.todoListWrap {
  padding 30px
  > li {
    + li {
      margin-top 15px
    }
  }
}
</style>

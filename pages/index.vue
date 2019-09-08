<template>
  <div class="todoList">
    <p v-if="todoList.length === 0" class="noTodo">NO TODO</p>
    <ul class="todoListWrap">
      <TodoItem
        v-for="(item, index) in todoList"
        :key="`todo${index}`"
        :item="item"
        :index="index"
        @deleteTodo="deleteTodo"
        @switchStatus="switchStatus"
      />
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import TodoItem from '~/components/TodoItem.vue'
import store from '~/store/store.ts'

@Component({
  components: {
    TodoItem
  }
})
export default class Index extends Vue {
  get todoList() {
    return store.state.todoList
  }
  deleteTodo(index: number) {
    store.commit('deleteTodo', index)
  }
  switchStatus(index: number) {
    store.commit('switchStatus', index)
  }
}
</script>

<style lang="stylus" scoped>
.noTodo {
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 88px);
}

.todoListWrap {
  padding: 30px;
  > li {
    + li {
      margin-top: 15px;
    }
  }
}
</style>

<template>
  <div class="todoList">
    no todo
    <ul class="todoListWrap">
      <TodoItem
        v-for="(item, index) in todoList"
        :key="`todo${index}`"
        :item="item"
      />
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import TodoItem from '~/components/TodoItem.vue'
import store from '~/store/store.ts'

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
}
</script>

<style lang="stylus" scoped>
* {
  margin: 0;
  padding: 0;
}

ul,
li {
  list-style: none;
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

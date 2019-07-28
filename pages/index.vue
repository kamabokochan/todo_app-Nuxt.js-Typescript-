<template>
  <div class="todoList">
    <ul class="todoListWrap">
      <li v-for="(item, index) in todoList" :key="`todo${index}`">
        <p class="taskId">{{ index }}</p>
        <p class="task">{{ item.task }}</p>
        <p class="isDone">
          <input id="" v-model="item.isDone" type="checkbox" name="" />
        </p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Logo from '~/components/Logo.vue'

type todoType = {
  id: number
  task: string
  isDone: boolean
}

@Component({
  components: {
    Logo
  }
})
export default class Index extends Vue {
  todoList: todoType[] = [
    {
      id: 1,
      task: 'タスク1',
      isDone: false
    },
    {
      id: 2,
      task: 'タスク2',
      isDone: false
    },
    {
      id: 3,
      task: 'タスク3',
      isDone: false
    }
  ]
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
ul,
li {
  list-style: none;
}
.todoListWrap > li {
  display: flex;
  align-items: center;
}
</style>

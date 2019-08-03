<template>
  <li v-if="isFilter ? !item.isDone : true" class="todoItem">
    <label>
      <p class="isDone">
        <input id="" v-model="item.isDone" type="checkbox" name="" />
      </p>
      <p class="task">{{ item.task }}</p>
    </label>
  </li>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
type todoType = {
  task: string
  isDone: boolean
}

@Component({})
export default class todoItem extends Vue {
  @Prop({ default: {} })
  item!: todoType
  @Prop({ default: false })
  isFilter!: boolean
}
</script>

<style lang="stylus" scoped>
.todoItem {
  label {
    display flex
    align-items center
    cursor pointer
    border solid 1px #ccc
    padding 12px
    border-radius 30px
    .task {
      margin-left 15px
    }
    &:hover {
      .task {
        opacity 0.5
      }
    }
  }
}
</style>

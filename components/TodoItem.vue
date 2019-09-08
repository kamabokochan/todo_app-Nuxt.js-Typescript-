<template>
  <li class="todoItem">
    <label @click="$emit('switchStatus', index)">
      <p class="check" :class="{ isDone: item.isDone }">
        <font-awesome-icon icon="check-circle" />
      </p>
      <p class="task">{{ item.task }}</p>
    </label>
    <button class="delete" @click="$emit('deleteTodo', index)">
      <font-awesome-icon icon="times" />
    </button>
  </li>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { todoType } from '~/type/type.ts'

@Component({})
export default class todoItem extends Vue {
  @Prop({ default: {} })
  item!: todoType
  @Prop()
  index!: number
}
</script>

<style lang="stylus" scoped>
.todoItem {
  display: flex
  align-items: center
  label {
    display: flex
    align-items: center
    flex: 1
    cursor: pointer
    border: solid 1px #ccc
    padding: 12px
    border-radius: 30px
    .task {
      margin-left: 15px
    }
    &:hover {
      .task {
        opacity: 0.5
      }
    }
  }
  .delete {
    font-size: 15px;
    margin-left: 15px;
  }
}
.check.isDone {
  svg path {
    transition: 0.3s;
    fill: #ccc;
  }
}
</style>

<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入今天的任务清单，按回车键确认" @keyup.enter="addOneData" v-model="title" />
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: "Header",
  data () {
    return {
      title: ""
    }
  },

  // props: {
  //   addList: Function
  // },

  methods: {
    ...mapMutations(['ADDTODO']),
    addOneData () {
      let title = this.title;
      if (!this.title) {
        alert('title不能为空')
        return false
      }

      let todo = { title, isDo: false }

      this.ADDTODO(todo);
      this.title = '';
    }
  }



}
</script>

<style scoped>
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
  outline: none;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(255, 0, 0, 0.8);
  box-shadow: inset 0 1px 1px rgba(255, 0, 0, 0.075),
    0 0 8px rgba(255, 0, 0, 0.6);
}
</style>
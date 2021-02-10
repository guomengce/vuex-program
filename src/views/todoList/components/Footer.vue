<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isCheck" />
    </label>
    <span>
      <span>已完成{{finishedCount}}件</span> / 总计{{toDolist.length}}件
    </span>
    <button @click="clearAllFinished" class="btn btn-warning">清除已完成任务</button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex'
export default {
  name: "Footer",
  data () {
    return {
    }
  },

  computed: {
    ...mapState(['toDolist']),
    ...mapGetters(['finishedCount', 'isCheck']),
    isCheck: {
      get () {
        return this.toDolist.length === this.finishedCount;
      },
      set (val) {
        this.allFinishedOr(val);
      }
    }

  },
  methods: {
    ...mapMutations(['allFinishedOr', 'clearAllFinished'])
  },
}
</script>

<style scoped>
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
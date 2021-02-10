<template>
  <li>
    <label>
      <input v-model="list.isDo" type="checkbox" />
      <span>{{list.title}}</span>
    </label>
    <button @click="DELTODO(index)" class="btn btn-warning">删除</button>
  </li>
</template>

<script>
// import Pubsub from 'pubsub-js'
import { mapMutations } from 'vuex'
export default {
  name: "Item",

  props: {
    list: {
      type: Object,
      default: () => {
        return {}
      }
    },
    index: Number,
    // delTodo: Function
  },

  methods: {
    ...mapMutations(['DELTODO']),

  }

}
</script>

<style scoped>
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  padding: 4px 10px;
  float: right;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>
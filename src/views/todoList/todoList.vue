<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <h3>todolist vuex</h3>
      <Header />
      <List />
      <Footer />
    </div>
  </div>

</template>

<script>
// 引入组件
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'

// 引入工具类
// import {readTodos} from './utils/localStorageUtil'
// import Pubsub from 'pubsub-js'


import { mapState } from 'vuex'
export default {
  name: 'app',
  data () {
    return {

    }
  },
  computed: {
    ...mapState(['toDolist'])
  },
  components: {
    Header,
    List,
    Footer
  },
  mounted () {

  },

  methods: {

  },
  watch: {

  }
}
</script>

<style>
.todo-container {
  width: 600px;
  margin: 50px auto;
}

.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>

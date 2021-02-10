<template>
  <div id="app">

    <Count />

    <mapCount />

    <todoList />

  </div>
</template>

<script>
import mapCount from './views/count/mapCount'
import Count from './views/count/Count'
import todoList from './views/todoList/todoList'
export default {
  name: "App",
  data () {
    return {}
  },

  components: { mapCount, Count, todoList, },
}
</script>

<style lang="scss" scoped>
#app {
  // width: 500px;
  margin: 0 auto;
  padding-top: 50px;
  padding-bottom: 50px;
  background-color: #f1f1f1;
}
</style>

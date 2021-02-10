<template>
  <div style="width:500px;margin:0 auto;">
    <h3>vuex 的普通用法</h3>
    <p>点击了{{count}}次，是{{countType}}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">偶数加+</button>
    <button @click="incrementAsync">异步+</button>
  </div>
</template>

<script>
export default {
  name: "App",
  data () {
    return {}
  },

  computed: {
    count () {
      return this.$store.state.count
    },
    countType () {
      return this.$store.getters.countType
    }
  },
  methods: {

    // mutations直接控制view
    increment () {
      this.$store.commit('INCREMENT')
    },
    decrement () {
      this.$store.commit('DECREMENT')
    },


    // 通过action将异步转为同步再通过mutation控制view
    incrementIfOdd () {
      this.$store.dispatch('incrementIfOdd')
    },
    incrementAsync () {
      this.$store.dispatch('incrementAsync')
    }

  }
}
</script>



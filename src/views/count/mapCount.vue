<template>
  <div style="width:500px;margin:0 auto;">
    <h3>map的用法</h3>
    <p>点击了{{count}}次,是{{countType}}</p>
    <button @click="INCREMENT">+</button>
    <button @click="DECREMENT">-</button>
    <button @click="incrementIfOdd">偶数加+</button>
    <button @click="incrementAsync">异步+</button>

  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'
export default {
  name: "App",
  data () {
    return {}
  },

  computed: {
    ...mapState(['count']),
    ...mapGetters(['countType'])

  },
  methods: {
    ...mapMutations(['INCREMENT', 'DECREMENT']),

    ...mapActions(['incrementIfOdd', 'incrementAsync'])


  }
}
</script>


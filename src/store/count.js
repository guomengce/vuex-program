export default {
  state: {
    count: 0
  },
  mutations: {
    INCREMENT (state) {
      state.count++
    },
    DECREMENT (state) {
      state.count--
    },

    // 3、不需要通过action也可以直接在页面上直接像以上两个的方式调用------与下面的action的对应方法都可
    INCREMENTIDODD (state) {

      // if (!(state.count % 2)) {
      //   state.count++;
      // }

    }
  },
  actions: {
    // 3、要通过action来调用（一般是用action将异步装换为同步）,要通过mutations与页面发生数据连接
    incrementIfOdd ({ commit, state }) {
      if (!(state.count % 2)) {
        commit('INCREMENT')
      }

    },

    // 异步加
    incrementAsync ({ commit }) {
      setTimeout(() => {
        commit('INCREMENT')
      }, 2000);

    }
  },

  getters: {
    countType (state) {
      return state.count % 2 ? '奇数' : '偶数'
    }
  },
}
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,

    // ---------------------------------------todolist-----

    toDolist: [{
      id: 1, title: 'csdcsgt', isDo: false
    }, {
      id: 2, title: 'cds', isDo: false
    }, {
      id: 3, title: 'yjty', isDo: false
    }, {
      id: 4, title: '12e2r3', isDo: false
    }, {
      id: 5, title: 'fre', isDo: false
    }]
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
    },

    // ---------------------------------------todolist-----

    ADDTODO (state, list) {
      console.log('list', list);
      state.toDolist.unshift(list)

    },

    DELTODO (state, index) {
      state.toDolist.splice(index, 1);

    },

    allFinishedOr (state, isCheck) {
      state.toDolist.forEach(item => {
        item.isDo = isCheck;
      })
    },
    clearAllFinished (state) {
      state.toDolist = state.toDolist.filter(item => !item.isDo);
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

    },


    // ---------------------------------------todolist-----
  },

  getters: {
    countType (state) {
      return state.count % 2 ? '奇数' : '偶数'
    },

    // ---------------------------------------todolist-----
    finishedCount (state) {
      return state.toDolist.reduce((total, item) => total + (item.isDo ? 1 : 0), 0);
    },


  },

})

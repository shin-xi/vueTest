import Vue from 'vue'
import Vuex from 'vuex'
import moduleDemo from '@/store/demo'

Vue.use(Vuex)

const myPlugin = store => { // 存放websocket
  // 当 store 初始化后调用
  store.commit('incrementPlugin')
  store.subscribe((mutation, state) => {
    // 每次 mutation 之后调用
    // mutation 的格式为 { type, payload }
    if (mutation.type !== 'incrementPlugin') {
      // console.count('state')
    }
  })
}

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    loading: false,
    count: 0,
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false },
      { id: 3, text: '...', done: true },
      { id: 4, text: '...', done: false }
    ],
    pluginCount: 1,
    obj: {
      message: ''
    }
  },
  getters: {
    doneTodos (state) { // 获取state计算
      return state.todos.filter(todo => todo.done)
    },
    doneTodosCount (state, getters) { // 获取state,getters计算
      // console.log(getters)
      return getters.doneTodos.length
    },
    getTodoById (state) { // 返回函数计算
      return (id) => state.todos.find(todo => todo.id === id)
    }
  },
  mutations: {
    switchLoading (state) {
      state.loading = !state.loading
    },
    increment (state, payload) {
      // 变更状态
      state.count += (payload && payload.amount) || 10
    },
    incrementBy (state, payload) {
      // 变更状态
      state.count += (payload && payload.amount) || 10
    },
    incrementPlugin (state) {
      state.pluginCount += 1
    },
    updateMessage (state, message) {
      state.obj.message = message
    }
  },
  actions: {
    incrementAsync ({ commit }) {
      setTimeout(() => {
        commit('increment')
      }, 1000)
    }
  },
  modules: {
    moduleDemo
  },
  plugins: [myPlugin]
})

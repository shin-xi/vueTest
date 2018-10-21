export default {
  namespaced: true,
  state: {
    name: 'shino'
  },
  getters: {
    name (state, getters, rootState) {
      return state.name
    }
  },
  actions: {
    demo (context) {
      // console.log(context)
      // console.log(context.rootState)
    }
  }
}

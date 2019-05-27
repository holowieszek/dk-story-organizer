const state = {
  drawer: true
}

const getters = {
  drawer: state => {
    return state.drawer
  }
}

const actions = {
  toggleDrawer({commit}) {
    commit('drawer', true)
  }
}

const mutations = {
  drawer (state,value) {
    state.drawer = !state.drawer
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

const state = {
  options: {
    status: false,
    text: '',
    mode: ''
  }
}

const getters = {
  getSnackbar: state => {
    return state.options
  }
}

const actions = {
  showSnackbar({commit}, data) {
    commit('snackbar', data)
  },
  showErrorSnackbar({commit}) {
    commit('errorSnackbar');
  }
}

const mutations = {
  snackbar(state, payload) {
    state.options = {
      status: true,
      text: payload
    }
  },
  errorSnackbar(state) {
    state.options = {
      status: true,
      text: 'Something went wrong',
      mode: 'error'
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

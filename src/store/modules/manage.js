const state = {
  tagParentId: '',
  tag: [],
  currentTagItem: '',
  currentArticleItem: ''
}

const getters = {
  getParentId: state => {
    return state.tagParentId
  },
  getTag: state => {
    return state.tag
  },
  getCurrentTagItem: state => {
    return state.currentTagItem;
  },
  getCurrentArticleItem: state => {
    return state.currentArticleItem;
  }
}

const actions = {
  createTag({commit, dispatch}, data) {
    axios.post('/tags', data)
      .then(result => {
        dispatch('showSnackbar', 'Tag has been created successfully!');
        dispatch('getArticles');
        // commit('tag', null);
      })
      .catch(error => {
        dispatch('showErrorSnackbar');
      })
  },
  updateTag({commit, dispatch}, data) {
    axios.put('/tags/' + data.id, data)
      .then(result => {
        dispatch('showSnackbar', 'Tag has been updated successfully!');
        dispatch('getArticles');
        dispatch('closeDialog');
        // commit('tag', null);
      })
      .catch(error => {
        dispatch('showErrorSnackbar');
      })
  },
  getTag({commit}, tagId) {
    axios.get('/tags/' + tagId)
      .then(result => {
        commit('tag', result.data)
      })
  },
  deleteTag({commit, dispatch}, tag) {
    axios.delete('/tags/' + tag)
      .then(result => {
        dispatch('showSnackbar', 'Tag has been deleted successfully!');
        dispatch('closeConfirmDialog', false);
        dispatch('getArticles');
      })
      .catch(error => {
        dispatch('showErrorSnackbar');
      })
  },
  deleteArticle({commit, dispatch}, article) {
    axios.delete('/articles/' + article)
      .then(result => {
        dispatch('showSnackbar', 'Article has been deleted successfully!');
        dispatch('closeConfirmDialog', false);
        dispatch('getArticles');
      })
      .catch(error => {
        dispatch('showErrorSnackbar');
      })
  },
}

const mutations = {
  tagParentId(state, payload) {
    state.tagParentId = payload;
  },
  tag (state, payload) {
    state.tag = payload;
  },
  currentTagItem (state, payload) {
    state.currentTagItem = payload;
  },
  currentArticleItem (state, payload) {
    state.currentArticleItem = payload;
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

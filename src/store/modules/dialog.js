const state = {
  dialog: false,
  deleteDialog: false,
  edit: false,
  articleEdit: false
}

const getters = {
  getDialogStatus: state => {
    return state.dialog
  },
  getDeleteDialog: state => {
    return state.deleteDialog
  },
  getEditMode: state => {
    return state.edit
  },
  getArticleEditDialog: state => {
    return state.articleEdit
  }
}

const actions = {
  setDialog({commit, dispatch}, parentId) {
    commit('tag', null);
    if(parentId === null) {
      commit('dialog', true);
    } else {
      dispatch('getTag', parentId);
      commit('dialog', true);
    }
  },
  setEditDialog({commit, dispatch}, parentId) {
    // commit('tag', null);
    dispatch('getTag', parentId);

    commit('edit', true);
    commit('dialog', true);
  },
  confirmTagDelete({commit}, id) {
    commit('confirmDelete', true);
    commit('currentTagItem', id);
    console.log(id);
  },
  confirmArticleDelete({commit}, id) {
    commit('confirmDelete', true);
    commit('currentArticleItem', id);
  },
  closeConfirmDialog({commit}, id) {
    commit('confirmDelete', false);
    commit('currentArticleItem', null);
    commit('currentTagItem', null);
  },
  closeDialog({commit}) {
    // commit('tag', null);
    commit('dialog', false);
    commit('articleDialog', false);
    commit('edit', false);
  },
  setArticleEditDialog({commit, dispatch}, id) {
    dispatch('getArticle', id);
    commit('articleDialog', true)
  }
}

const mutations = {
  dialog (state, payload) {
    state.dialog = payload
  },
  confirmDelete (state, payload) {
    state.deleteDialog = payload;
  },
  edit (state, payload) {
    state.edit = payload;
  },
  articleDialog (state, payload) {
    state.articleEdit = payload;
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

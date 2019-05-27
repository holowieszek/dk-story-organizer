import { mapGetters } from 'vuex';

const state = {
  article: [],
  articles: [],
  editArticleTags: null,
  selectedTags: []
}

const getters = {
  getArticle: state => {
    return state.article
  },
  articles: state => {
    return state.articles;
  },
  editArticleTags: state => {
    return state.editArticleTags
  },
  selectedTags: state => {
    return state.selectedTags;
  },
  selectedTag: state => index => {
    return state.selectedTags.indexOf(index) === -1 ? false : true
  }
}

const actions = {
  getArticle({commit}, id) {
    axios('/articles/' + id)
      .then(result => {
        commit('article', result.data)

        commit('articleEditTagsClear');

        let currentTags = [];
        result.data.tags.forEach((element) => {
          currentTags.push(element.id)
        });

        commit('articleEditTags', currentTags)
      });
  },
  getArticles({commit}) {
    axios('/tags/tree')
    .then(result => commit('articles', result.data))
  },
  createArticle({commit, dispatch}, article) {
    axios.post('/articles', article)
      .then(result => {
        dispatch('getArticles');
        dispatch('showSnackbar', 'Article has been created successfully!');
      })
      .catch(error => {
        dispatch('showErrorSnackbar');
      })
  },
  updateArticle({commit, dispatch}, article) {
    axios.put('/articles/' + article.id, article)
      .then(response => {
        dispatch('updateArticleTags', article);
      })
      .catch(error => {
        dispatch('showErrorSnackbar');
      })
      .finally(result => {
        dispatch('showSnackbar', 'Article has been updated successfully!');
        dispatch('closeDialog');
      })
  },
  updateArticleTags({commit, dispatch}, article) {
    axios.post(`/articles/${article.id}/tags`, article.tagIds)
      .then(result => {
        dispatch('getArticles');
      })
  }
}

const mutations = {
  article (state, payload) {
    state.article = payload
  },
  articles (state, payload) {
    state.articles = payload
  },
  articleEditTags (state, payload) {
    state.editArticleTags = payload;
  },
  articleEditTagsClear (state) {
    state.editArticleTags = '';
  },
  clearTags(state) {
    state.selectedTags = [];
  },
  selectedTagsToggler(state, value) {
    let finded = state.selectedTags.indexOf(value)
    if(finded === -1) {
      state.selectedTags.push(value)
      return value;
    }
    return state.selectedTags.splice(finded,1);
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

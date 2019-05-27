import Vue from 'vue'
import Vuex from 'vuex'
import articles from './modules/articles';
import navbar from './modules/navbar';
import manage from './modules/manage';
import dialog from './modules/dialog';
import snackbar from './modules/snackbar';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    articles,
    navbar,
    manage,
    dialog,
    snackbar
  }
})

import Vue from 'vue'
import Router from 'vue-router'

import ShowArticle from '../components/Articles/ShowArticle'
import CreateArticle from '../components/Articles/Create'
import Manage from '../components/Manage/Show'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/articles/create',
      name: 'CreateArticle',
      component: CreateArticle
    },
    {
      path: '/articles/:id',
      name: 'ShowArticle',
      component: ShowArticle
    },
    {
      path: '/manage',
      name: 'Manage',
      component: Manage
    }
  ]
})

<template>
  <v-app id="inspre">
    <v-navigation-drawer
      :clipped="$vuetify.breakpoint.lgAndUp"
      v-model="drawer"
      fixed
      app>
      <v-list dense expand>
        <tree v-for="node in tree" :tree-data="node" :key="node.id"></tree>
      </v-list>
    </v-navigation-drawer>

    <navbar></navbar>

    <v-content>
      <v-container fluid fill-height>
        <v-layout>
          <v-flex xs12>
            <router-view></router-view>
            <snackbar v-if="snackbar.status"></snackbar>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Tree from "./components/Tree/Tree";
import Navbar from "./components/Navbar/Index";
import Snackbar from "./Snackbar";

import { mapGetters } from 'vuex';

export default {
  data: () => ({
    //
  }),
  components: {
    Tree,
    Navbar,
    Snackbar
  },
  computed: {
    ...mapGetters({
      article: 'currentArticle',
      tree: 'articles',
      drawer: 'drawer',
      snackbar: 'getSnackbar'
    })
  },
  created () {
    this.$store.dispatch('getArticles');
  }
};
</script>

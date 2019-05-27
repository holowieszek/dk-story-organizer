<template>
 <v-card class="card--flex-toolbar">
    <v-toolbar card prominent>
      <v-toolbar-title class="body-2 grey--text">{{ test }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn color="text-right info" @click="createTagDialog()">CREATE PARENT TAG</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-divider></v-divider>
    <v-card-text style="height: auto;">
      <v-container grid-list-md>
        <v-list dense expand>
          <tree v-for="node in tree" :mode="setMode" :tree-data="node" :key="node.id"></tree>
        </v-list>
      </v-container>
    </v-card-text>
    <create-tag-dialog v-if="dialog"></create-tag-dialog>
    <create-article-dialog v-if="articleDialog"></create-article-dialog>
    <confirm-delete v-if="deleteDialog"></confirm-delete>
  </v-card>
</template>

<script>
  import tree from '../Tree/Tree';
  import createTagDialog from '../Dialog/Tag';
  import createArticleDialog from '../Dialog/Article';
  import confirmDelete from '../Dialog/ConfirmDelete';

  import { mapGetters } from 'vuex';

  export default {
    data: () => ({
      test: 'hello',
      setMode: 'manage'
    }),
    computed: {
      ...mapGetters({
        dialog: 'getDialogStatus',
        articleDialog: 'getArticleEditDialog',
        tree: 'articles',
        deleteDialog: 'getDeleteDialog'
      })
    },
    components: {
      tree,
      createTagDialog,
      createArticleDialog,
      confirmDelete
    },
    created () {
      this.$store.dispatch('getArticles');
    },
    methods: {
      createTagDialog () {
        this.$store.dispatch('setDialog', null);
      },
    }
  }
</script>

<template>
  <v-layout>
    <v-list-tile-action>
      <v-btn icon ripple @click.stop.prevent="editArticle(child.id)">
        <v-icon color="grey lighten-1">build</v-icon>
      </v-btn>
    </v-list-tile-action>
    <v-list-tile-action>
      <v-btn icon ripple @click.stop.prevent="confirmDelete(child.id)">
        <!-- <v-icon color="grey lighten-1" @click="deleteArticle(child.id)">delete</v-icon> -->
        <v-icon color="grey lighten-1">delete</v-icon>
      </v-btn>
    </v-list-tile-action>
  </v-layout>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    props: {
      child: Object
    },
    methods: {
      editArticle (id) {
        // console.log(`edit article ${id}`);
        this.$store.dispatch('setArticleEditDialog', id);
      },
      confirmDelete(id) {
        this.$store.dispatch('confirmArticleDelete', id);
      }
    }
  }
</script>


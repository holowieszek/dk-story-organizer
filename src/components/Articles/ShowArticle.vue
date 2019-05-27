<template>
  <v-card class="card--flex-toolbar">
    <v-toolbar card prominent>
      <v-toolbar-title class="body-2 grey--text">{{ article.title }}</v-toolbar-title>
    </v-toolbar>
    <v-divider></v-divider>
    <v-card-text style="height: auto;">
      <v-container grid-list-md>
      {{ article }}
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
  import { mapGetters } from 'vuex';
  export default {
    name: "test",
    data: () => ({
      article: []
    }),
    watch: {
      $route (to, from) {
        // console.log(to.path)
        this.getArticle(to.params.id)
      }
    },
    created () {
      if(this.$route.params.id) {
        this.getArticle(this.$route.params.id)
      }
    },
    methods: {
      getArticle (id) {
        axios('/articles/' + id)
          .then(result => {
            this.article = result.data
          })
      }
    }
  }
</script>

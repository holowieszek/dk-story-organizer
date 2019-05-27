<template>
  <v-toolbar
        :clipped-left="$vuetify.breakpoint.lgAndUp"
        color="blue darken-3"
        dark
        app
        fixed
      >
    <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
      <v-toolbar-side-icon @click="setDrawer()"></v-toolbar-side-icon>
      <router-link to="/">
        <span class="hidden-sm-and-down">Story Organizer</span>
      </router-link>

    </v-toolbar-title>
    <v-text-field
      flat
      solo-inverted
      hide-details
      prepend-inner-icon="search"
      label="Search"
      class="hidden-sm-and-down"
    ></v-text-field>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn :to="`/articles/create`" flat>Create article</v-btn>
      <v-btn :to="`/manage`" flat>Manage</v-btn>
    </v-toolbar-items>
    <div>
      <v-btn icon large>
          <v-avatar size="32px" tile>
            <img
              src="/static/icon-128.png"
              alt="Vuetify"
            >
          </v-avatar>
        </v-btn>
    </div>

  </v-toolbar>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    data: () => ({

    }),
    computed: {
      ...mapGetters({
        article: 'currentArticle',
        tree: 'articles',
      }),
    },
    methods: {
      setDrawer () {
        this.$store.dispatch('toggleDrawer', false);
      }
    }
  }
</script>

<style scoped>
  a {
    text-decoration: none;
    color: #fff;
  }
</style>

<template>
  <v-card class="card--flex-toolbar">
    <v-toolbar card prominent>
      <v-toolbar-title class="body-2 grey--text">Create Article</v-toolbar-title>
    </v-toolbar>
    <v-divider></v-divider>
    <v-card-text style="height: auto;">
      <v-container grid-list-md>
        <form @submit.prevent="saveArticle">
          <v-text-field
            v-model="title"
            label="Title"
            name="title"
            data-vv-name="title"
            required
          ></v-text-field>

          <v-text-field
            v-model="hyperLink"
            label="Link"
            name="hyperLink"
            data-vv-name="link"
            required
          ></v-text-field>

          <v-list expand>
            <tree v-for="node in tree" :tree-data="node" :key="node.id" :manage="true"></tree>
          </v-list>
          <v-btn class="error" @click="clear">clear</v-btn>

          <v-btn class="success" type="submit" :disabled="$v.$invalid">submit</v-btn>

        </form>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
  import {mapGetters} from 'vuex';
  import Tree from "./CreateTagsTree";
  import CreateVuelidate from "./Create/CreateVuelidate.ts";

  export default {

    data: () => ({
      title: '',
      hyperLink: 'http://dziejekhorinis.org'
    }),
    mixins: [CreateVuelidate],
    components: {
      Tree
    },
    computed: {
      ...mapGetters({
        tree: 'articles',
        selectedTags: 'selectedTags'
      })
    },
    methods: {
      saveArticle() {
        const body = {
          title: this.title,
          hyperLink: this.hyperLink,
          tagIds: this.selectedTags
        }
        this.$store.dispatch('createArticle', body);
      },

      /*
        Jeżeli dobrze myślę ta metoda nie jest już dłużej potrzebna.
      */

      // getSelectedTags (tags) {
      //   console.log(tags);
      //   if([...tags].length === 0) {
      //     this.selectedTags.push(tags.dataset.id);
      //   } else {
      //     tags.forEach(element => {
      //       if(element.checked) {
      //         this.selectedTags.push(element.dataset.id)
      //       }
      //     });
      //   }
      // },
      clear() {
        this.$store.commit("clearTags");
        this.title = '';
        this.hyperLink = 'http://dziejekhorinis.org';
      }
    }
  }
</script>

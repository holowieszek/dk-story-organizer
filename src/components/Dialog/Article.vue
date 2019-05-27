<template>
  <v-layout row justify-center>
    <v-dialog v-model="articleDialog" persistent max-width="900px">
      <v-form @submit.prevent="saveArticle">
        <v-card>
          <v-card-title>
            <span class="headline">Edit article {{ article.title }}</span>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12>
                  <v-text-field
                    label="Title"
                    solo
                    v-model="article.title"
                    required></v-text-field>
                </v-flex>
                 <v-flex xs12>
                  <v-text-field
                    label="Hyperlink"
                    solo
                    v-model="article.hyperLink"
                    required></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>

          <v-list expand>
            <tree v-for="node in tree" :test="article.tags" :selected="selected" :mode="mode" :tree-data="node" :key="node.id" :manage="true"></tree>
          </v-list>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click.native="closeDialog()">Close</v-btn>
            <v-btn type="submit" color="blue darken-1" flat>Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-form>
    </v-dialog>
  </v-layout>
</template>

<script>
  import { mapGetters } from 'vuex';
  import Tree from "../Articles/CreateTagsTree";

  export default {
    data: () => ({
      title: '',
      hyperLink: '',
      selected: '',
      mode: 'editArticle',
      newSelectedTags: []
    }),
    computed: {
      ...mapGetters({
        articleDialog: 'getArticleEditDialog',
        article: 'getArticle',
        tree: 'articles'
      })
    },
    components: {
      Tree
    },
    methods: {
      saveArticle(e) {
        this.newSelectedTags = [];
        let tags = event.target.elements.tags;
        this.getSelectedTags(tags);

        const dataBody = {
          id: this.article.id,
          newTitle: this.article.title,
          newHyperLink: this.article.hyperLink,
          tagIds: this.newSelectedTags
        };

        this.$store.dispatch('updateArticle', dataBody);
      },
      getSelectedTags (tags) {
        if([...tags].length === 0) {
          this.newSelectedTags.push(tags.dataset.id);
        } else {
          tags.forEach(element => {
            if(element.checked) {
              this.newSelectedTags.push(element.dataset.id)
            }
          });
        }

      },
      closeDialog() {
        this.$store.dispatch('closeDialog');
      }
    }
  }

</script>

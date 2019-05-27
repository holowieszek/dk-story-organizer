<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="900px">
      <v-form @submit.prevent="saveTag">
        <v-card>
          <v-card-title v-if="edit">
            <span class="headline" v-if="tag">Edit tag {{ tag.title }}</span>
          </v-card-title>
          <v-card-title v-else>
            <span class="headline" v-if="tag">Create child tag in {{ tag.title }}</span>
            <span class="headline" v-else>Create parent tag</span>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 v-if="edit && tag !== null">
                  <v-text-field
                    label="Tag name"
                    solo
                    v-model="tag.title"
                    required></v-text-field>
                </v-flex>
                <v-flex xs12 v-else>
                  <v-text-field
                    label="Tag name"
                    solo
                    v-model="title"
                    required></v-text-field>
                </v-flex>
                <v-flex xs12 v-if="edit && tag !== null">
                  <v-textarea
                    label="Tag Description"
                    v-model="tag.description"
                    solo
                    name="input-7-4"
                    required></v-textarea>
                </v-flex>
                <v-flex xs12 v-else>
                  <v-textarea
                    label="Tag Description"
                    v-model="description"
                    solo
                    name="input-7-4"
                    required></v-textarea>
                </v-flex>
                <v-flex xs12 v-if="edit">
                  <v-list expand>
                    <v-radio-group v-model="setNewParent">
                      <tree v-for="node in tree" :tree-data="node" :key="node.id" :mode="mode" :manage="true"></tree>
                    </v-radio-group>
                  </v-list>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>
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
  import Tree from '../Articles/CreateTagsTree';

  export default {
    data: () => ({
      title: '',
      description: '',
      tagData: [],
      mode: 'editTag',
      newParentId: this.setNewParent
    }),
    components: {
      Tree
    },
    computed: {
      ...mapGetters({
        tag: 'getTag',
        dialog: 'getDialogStatus',
        edit: 'getEditMode',
        tree: 'articles'
      }),
      setNewParent: {
        get: function () {
          try {
            return this.tag.parentId
          } catch(error) {
            return;
          }
        },
        set: function (newValue) {
          this.newParentId = newValue
        }
      }
    },
    methods: {
      saveTag(e) {
        if(this.edit) {
          const data = {
            id: this.tag.id,
            newTitle: this.tag.title,
            newDescription: this.tag.description,
            newParentId: this.newParentId
          };

          this.$store.dispatch('updateTag', data);
        } else {
          if(!this.tag) {
            this.parentData();
          } else {
            this.childData();
          }

          this.$store.dispatch('createTag', this.tagData);
          this.closeDialog()
        }

      },
      parentData() {
        return this.tagData = {
          title: this.title,
          tagName: 'dev',
          description: this.description,
        }
      },
      childData() {
        return this.tagData = {
          title: this.title,
          tagName: 'dev',
          description: this.description,
          parentId: this.tag.id
        }
      },
      closeDialog() {
        this.$store.dispatch('closeDialog');
      },
    }
  }
</script>

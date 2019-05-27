<template>
  <v-layout row justify-center>
    <v-dialog v-model="deleteDialog" persistent max-width="600">
      <v-card>
        <v-card-title class="headline">Delete</v-card-title>
        <v-card-text>Are you sure you want to permamently remove this item? {{ currentArticleItem }}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red darken-1" flat @click.native="closeConfirmDialog()">Cancel</v-btn>
          <v-btn color="success darken-1" @click.native="deleteItem()">Accept</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    computed: {
      ...mapGetters({
        deleteDialog: 'getDeleteDialog',
        currentTagItem: 'getCurrentTagItem',
        currentArticleItem: 'getCurrentArticleItem'
      })
    },
    methods: {
      deleteItem() {
        if(this.currentArticleItem) {
          this.$store.dispatch('deleteArticle', this.currentArticleItem);
        } else {
          this.$store.dispatch('deleteTag', this.currentTagItem);
        }
      },
      closeConfirmDialog() {
        this.$store.dispatch('closeConfirmDialog');
      }
    }
  }
</script>

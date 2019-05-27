<template>
  <v-layout>
    <v-list-tile-action>
      <v-btn icon ripple @click.stop.prevent="editTag(node.id)">
        <v-icon color="grey lighten-1">build</v-icon>
      </v-btn>
    </v-list-tile-action>
    <v-list-tile-action>
      <v-btn icon ripple @click.stop.prevent="createChildTag(node.id)">
        <v-icon color="grey lighten-1">add</v-icon>
      </v-btn>
    </v-list-tile-action>
    <v-list-tile-action>
      <v-btn icon ripple @click.stop.prevent="confirmDelete(node.id)">
        <v-icon color="grey lighten-1">delete</v-icon>
      </v-btn>
    </v-list-tile-action>
  </v-layout>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    props: {
      node: Object
    },
    methods: {
      createParentTag (id) {
        this.$store.dispatch('setDialog', id);
      },
      createChildTag (id) {
        this.$store.dispatch('setDialog', id);
      },
      editTag (id) {
        this.$store.dispatch('setEditDialog', id);
      },
      confirmDelete(id) {
        this.$store.dispatch('confirmTagDelete', id);
      }
    }
  }
</script>

<style scoped>
.container.grid-list-md :not(:only-child) .layout:last-child {
  margin-bottom: 0;
}

.container.grid-list-md .layout:not(:only-child) {
  margin: 0;
}
</style>

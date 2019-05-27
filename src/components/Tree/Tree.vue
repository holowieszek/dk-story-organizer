<template>
  <v-list-group
      prepend-icon="account_balance">
      <v-list-tile slot="activator">
        <v-list-tile-title>{{ treeData.title }}</v-list-tile-title>
        <tag-buttons v-if="mode === 'manage'" :node="treeData"></tag-buttons>
      </v-list-tile>

      <node-tree v-for="children in treeData.childrenTags" :mode="mode" :key="children.id" :node="children"></node-tree>
  </v-list-group>
</template>

<script>
import NodeTree from "./NodeTree";
import TagButtons from "./TagButtons"

export default {
  props: {
    treeData: Object,
    mode: String
  },
  components: {
    NodeTree,
    TagButtons
  },
};
</script>

<style scoped>
 .container.grid-list-md :not(:only-child) .layout:last-child {
   margin-bottom: 0;
 }

 .container.grid-list-md .layout:not(:only-child) {
   margin: 0;
 }
</style>

<template>
  <div v-if="mode === 'editTag'">
    <v-radio :label="treeData.title" :value="treeData.id"></v-radio>
    <node-tree v-for="children in treeData.childrenTags" :key="children.id" :mode="mode" :node="children"></node-tree>
  </div>
  <v-list-group value="true" @click.stop v-else>
    <v-list-tile slot="activator">
      <v-list-tile-title>{{ treeData.title }}</v-list-tile-title>
    </v-list-tile>

    <node-tree v-for="children in treeData.childrenTags" :key="children.id" :mode="mode" :node="children"></node-tree>
  </v-list-group>
</template>

<script>
import { mapGetters } from 'vuex';
import NodeTree from "./CreateNodeTree";

export default {
  props: {
    treeData: Object,
    mode: String,
  },
  computed: {
    ...mapGetters({
      tag: 'getTag'
    }),
  },
  components: {
    NodeTree
  }
};
</script>


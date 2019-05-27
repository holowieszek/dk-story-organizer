<template>
  <v-list-group
    no-action
    sub-group
    prepend-icon="message">
      <v-list-tile slot="activator">

        <v-list-tile-title>{{ node.title }}</v-list-tile-title>
          <tag-buttons v-if="mode === 'manage'" :node="node"></tag-buttons>
        </v-list-tile>
      <v-list-tile v-for="child in node.articles" :key="child.id" active-class="info--text">
        <v-layout v-if="mode === 'manage'">
          <v-list-tile-title  v-if="node.articles" v-text="child.title"></v-list-tile-title>
          <article-buttons :child="child"></article-buttons>
        </v-layout>
        <v-layout v-else>
          <router-link :to="`/articles/${child.id}`">
            <v-list-tile-title  v-if="node.articles" v-text="child.title"></v-list-tile-title>
          </router-link>
        </v-layout>
      </v-list-tile>
      <node v-for="child in node.childrenTags" :node="child" :mode="mode" :key="child.id"></node>
  </v-list-group>
</template>

<script>
import TagButtons from './TagButtons'
import ArticleButtons from './ArticleButtons';
export default {
  name: "node",
  props: {
    node: Object,
    mode: String
  },
  components: {
    TagButtons,
    ArticleButtons
  },
};
</script>

<style>
.v-list__group__items .v-list__group__items--no-action {
  padding-left: 10px !important;
}

</style>

<style scoped>
  a {
    text-decoration: none;
    color: #000;
  }
</style>

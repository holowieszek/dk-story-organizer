<template>
  <div v-if="mode === 'editTag'">
    <v-radio name="tags" id="checkbox" v-if="tag" :label="node.title" :disabled="tag.id === node.id " :data-id="node.id" :value="node.id"></v-radio>
    <node v-for="child in node.childrenTags" :node="child" :mode="mode" :key="child.id"></node>
  </div>


  <v-list-group
    no-action
    sub-group
    value="true"
    @click.stop
    v-else>
      <v-list-tile slot="activator" v-if="mode === 'editArticle'">
        <v-checkbox
          v-if="!node.childrenTags && editArticleTags"
          name="tags"
          id="checkbox"
          v-model="selectedTags"
          :value="node.id"
          :label="node.title"
          :data-id="node.id"></v-checkbox>

        <v-list-tile-title v-else>{{ node.title }}</v-list-tile-title>
      </v-list-tile>

      <v-list-tile slot="activator" v-else>
        <v-checkbox v-if="!node.childrenTags" name="tags" :value="selectedTag(node.id)" :label="node.title" :data-id="node.id" @change="toggleCheckbox(node.id)"></v-checkbox>

        <v-list-tile-title v-else>{{ node.title }}</v-list-tile-title>
      </v-list-tile>
      <node v-for="child in node.childrenTags" :node="child" :mode="mode" :key="child.id"></node>
  </v-list-group>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  data () {
    return {
      test: 'hello',
      selected: []
    }
  },
  name: "node",
  props: {
    node: Object,
    mode: String,
  },
  methods : {
    toggleCheckbox(val) {
      this.$store.commit("selectedTagsToggler",val);
    }
  },
  computed: {
    ...mapGetters({
      tag: 'getTag',
      article: 'getArticle',
      editArticleTags: 'editArticleTags',
      selectedTag: 'selectedTag'
    }),
    selectedTags: {
      get() {
        return this.editArticleTags;
      },
      set(newValue) {
        this.selected = newValue;
      }
    }
  },
};
</script>

<style scoped>
.v-list__group__items .v-list__group__items--no-action {
  padding-left: 10px !important;
}
</style>

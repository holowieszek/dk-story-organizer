<template>
  <v-snackbar
      v-model="snackbarModel"
      bottom
      :color="color"
      right
      :timeout="timeout">
      {{ snackbar.text }}
    </v-snackbar>
</template>

<script>
  import { mapGetters } from 'vuex';
  export default {
    data () {
      return {
        mode: '',
        timeout: 2000,
        color: 'green',
        snackbarModel: true
      }
    },
    computed: {
      ...mapGetters({
        snackbar: 'getSnackbar'
      })
    },
    created () {
      if(this.snackbar.mode === 'error') {
        this.color = 'red';
      }
      setTimeout(() => {
        this.snackbar.status = false
      }, this.timeout)
    },
  }
</script>

<script>
import { store } from '../store'
import AppSearchBar from './AppSearchBar.vue'
import AppList_Films from './AppList_Films.vue'
import axios from 'axios'
export default {
  components: {
    AppSearchBar,
    AppList_Films
  }, data() {
    return {
      store
    }
  },
  methods: {
    searchTitle(title) {
      axios.get(`${store.url}${title}`).then((response) => {
        store.resultslist = response.data.results

      })
    }
  }

}
</script>
<template lang="">
  <main>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <AppSearchBar  @search="searchTitle"/>
          <AppList_Films />
        </div>
      </div>
    </div>

  </main>
</template>
<style lang="scss" scoped>

</style>
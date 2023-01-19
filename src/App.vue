<script>
/* Import */
import { store } from './store'
import axios from 'axios'
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
export default {
  /* Components */

  components: {
    AppHeader,
    AppMain,

  },
  data() {
    return {
      /* store.js */
      store
    }
  },
  methods: {
    /* I make three Axios calls */
    searchTitle(title) {

      /* Call for movies */
      axios.get(`${store.url}${title}`).then((response) => {
        store.listMovies = response.data.results
        /* Call for tv series */
        axios.get(`${store.urlseries}${title}`).then((response) => {
          store.listTv = response.data.results
          /* Call for flags */
          axios.get(`${store.urlcountry}`).then((response) => {
            store.listCountry = response.data
          })
        })
      })
    }
  }

}
</script>
<template lang="">
  <AppHeader @search="searchTitle"/>
  <AppMain />
</template>
<style lang="scss" >
@use './styles/generals.scss' as *;
</style>
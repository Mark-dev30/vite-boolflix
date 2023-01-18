<script>
import { store } from './store'
import axios from 'axios'
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
export default {
  components: {
    AppHeader,
    AppMain
  },
  data() {
    return {
      store
    }
  },
  methods: {
    searchTitle(title) {
      axios.get(`${store.url}${title}`).then((response) => {
        store.listMovies = response.data.results
        axios.get(`${store.urlseries}${title}`).then((response) => {
          store.listTv = response.data.results
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
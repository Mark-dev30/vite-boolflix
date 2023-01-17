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
  }

}
</script>
<template lang="">
  <AppHeader />
  <AppMain />
</template>
<style lang="scss" scoped>
@use './styles/generals.scss' as *;
</style>
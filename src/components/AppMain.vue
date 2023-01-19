<script>
import { store } from '../store'
import AppList_Films from './AppList_Films.vue'
export default {
  components: {
    AppList_Films
  }, data() {
    return {
      store
    }
  },

}
</script>
<template lang="">
  <main>
    <AppList_Films />
  </main>
</template>
<style lang="scss" scoped>

</style>
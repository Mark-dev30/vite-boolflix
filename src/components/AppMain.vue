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
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <AppList_Films />
        </div>
      </div>
    </div>

  </main>
</template>
<style lang="scss" scoped>
img {
  width: 100%;
  height: 80px;
}
</style>
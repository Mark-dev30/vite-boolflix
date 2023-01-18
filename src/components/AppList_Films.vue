<script>
import AppCard from './AppCard.vue';
import AppSerie from './AppSerie.vue'
import { store } from '../store'
export default {
    components: {
        AppCard,
        AppSerie

    },
    data() {
        return {
            store
        }
    }
}
</script>
<template lang="">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h6>Lista film</h6>
                <div class="content-list ">
                    <div class="content-movie d-flex justify-content-between">
                        <AppCard  v-for="(item, index) in store.listMovies" :key="index" :card="item"/>
                    </div>
                    <h4>lista serie tv</h4>
                    <div class="content-tv d-flex justify-content-between">
                        <AppSerie v-for="item in store.listTv" :card="item"/>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.content-movie {
    overflow-x: visible;
}
</style>
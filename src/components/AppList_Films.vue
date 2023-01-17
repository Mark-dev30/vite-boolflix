<script>
import { store } from '../store'
export default {
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
                <div class="content-list">
                    <ul>
                        <li v-for="item in store.resultslist">
                            <div class="card" style="width: 18rem;">
                                <div class="card-body">
                                    <h5 class="card-title">Titolo: {{item.title}}</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">Titolo Originale: {{item.original_title}}</h6>
                                    <p class="card-text">Lingua: {{item.original_language}}</p>
                                    <p class="card-text">Voto: {{item.vote_average}}</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>

</style>
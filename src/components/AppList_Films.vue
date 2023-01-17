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
                    <h6>Lista film</h6>
                    <ul class="d-flex flex-wrap">
                        <li v-for="item in store.listMovies">
                            <div class="card" style="width: 18rem;">
                                <div class="card-body">
                                    <h5 class="card-title">Titolo: {{item.title}}</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">Titolo Originale: {{item.original_title}}</h6>
                                    <div v-if="(Object.keys(store.listCountry)).includes((item.original_language).toLowerCase())">
                                        <span>Lingua: </span>
                                        <img :src="`https://flagcdn.com/32x24/${(item.original_language).toLowerCase()}.png`" alt="">
                                    </div>
                                    <div v-else-if="item.original_language == 'en'">
                                        <span>Lingua: </span>
                                        <img src="https://flagcdn.com/32x24/gb.png" alt="gb">

                                    </div>
                                    <div v-else>
                                        <span>Lingua: {{item.original_language}}</span>
                                    </div>
                                    <p class="card-text">Voto: {{item.vote_average}}</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <h4>lista serie tv</h4>
                    <ul class="d-flex flex-wrap">
                        <li v-for="item in store.listTv">
                            <div class="card" style="width: 18rem;">
                                <div class="card-body">
                                    <h5 class="card-title">Titolo: {{item.name}}</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">Titolo Originale: {{item.original_name}}</h6>
                                    <div v-if="(Object.keys(store.listCountry)).includes((item.original_language).toLowerCase())">
                                        <span>Lingua: </span>
                                        <img :src="`https://flagcdn.com/32x24/${(item.original_language).toLowerCase()}.png`" :alt="item.original_language">
                                    </div>
                                    <div v-else-if="(item.original_language.toLowerCase() == 'en')">
                                        <span>Lingua: </span>
                                        <img src="https://flagcdn.com/32x24/gb.png" alt="gb">
                                    </div>
                                    <div v-else>
                                        <span>Lingua: {{item.original_language}}</span>
                                    </div>
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
li {
    list-style: none;

}
</style>
<script>
import { store } from '../store'
export default {
    props: {
        card: Object
    },
    data() {
        return {
            store

        }
    },
    methods: {
        /* Function to insert stars */
        ratingstars(word) {
            let num = Math.floor(word.vote_average / 2);
            let stararray = [];
            for (let i = 0; i < num; i++) {
                stararray.push('fa-solid fa-star');
            }

            let numstar = 5 - num;
            for (let i = 0; i < numstar; i++) {
                stararray.push('fa-regular fa-star');
            }
            return stararray

        }
    }

}
</script>
<template lang="">
    <!-- Card start movies -->
    <div class="card" style="width: 100%; height: 100%">
        <!-- Condition if a url exists -->
        <div class="card-img text-center" v-if="card.poster_path == null">
            <img class="img-soon" src="../../public/coming-soon.jpg" alt="coming-soon">
        </div>
        <div class="card-img" v-else>
            <img  :src="`https://image.tmdb.org/t/p/w342${card.poster_path}`" :alt="card.name" class="card-img-top">
        </div>
        <!-- Card  Body-->
        <div class="card-body p-0">
            <h5 class="card-title text-white">Titolo: {{card.title}}</h5>
            <h6 class="card-subtitle mb-2 text-muted text-white">Titolo Originale: {{card.original_title}}</h6>
            <!-- Check if the flag is present in the array -->
            <div v-if="(Object.keys(store.listCountry)).includes((card.original_language).toLowerCase())">
                <span class="text-white">Lingua: </span>
                <img :src="`https://flagcdn.com/32x24/${(card.original_language).toLowerCase()}.png`" :alt="card.original_language">
            </div>
            <div v-else-if="(card.original_language.toLowerCase() == 'en')">
                <span class="text-white">Lingua: </span>
                <img src="https://flagcdn.com/32x24/gb.png" alt="gb">
            </div>
            <div v-else>
                <span class="text-white">Lingua: {{card.original_language}}</span>
            </div>
            <div class="card-text text-white">
                <i v-for="item in ratingstars(card)" :class="item" class="color-yellow"></i>
                <p>Overview: {{card.overview}}</p>
            </div>
        </div>  
    </div>
    
</template>
<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;

@include style-card;
</style>
<script>
/* Import swiper that allows me to scroll the images */
import { Swiper, SwiperSlide } from "swiper/vue";
import { FreeMode, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import AppCard from './AppCard.vue';
import AppSerie from './AppSerie.vue'
import { store } from '../store'
export default {
    components: {
        AppCard,
        AppSerie,
        Swiper,
        SwiperSlide,

    },
    data() {
        return {
            store,
            modules: [FreeMode, Pagination]
        }
    }
}
</script>
<template lang="">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <!-- container for the search result -->
                <div class="content-list ">
                    <!-- Container movie -->
                    <div class="content-movie mb-4">
                        <swiper :slidesPerView="5" :spaceBetween="30" :freeMode="true" :pagination="{clickable: true,}" :modules="modules" class="mySwiper">
                            <swiper-slide v-for="(item, index) in store.listMovies"><AppCard :card="item"/></swiper-slide>
                        </swiper>
                    </div>
                    <!-- Container series tv -->
                    <div class="content-tv">
                        <swiper :slidesPerView="5" :spaceBetween="30" :freeMode="true" :pagination="{clickable: true,}" :modules="modules" class="mySwiper">
                            <swiper-slide v-for="item in store.listTv"><AppSerie :card="item"/></swiper-slide>
                        </swiper>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.content-movie,
.content-tv {
    max-height: 500px;
}

.content-list {
    padding: 50px 0;
}

h4 {
    color: white;
}

.swiper {
    width: 100%;
    height: 100%;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>
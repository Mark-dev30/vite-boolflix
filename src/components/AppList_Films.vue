<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
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
            modules: [Pagination]
        }
    }
}
</script>
<template lang="">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h4>Lista film</h4>
                <div class="content-list ">
                    <div class="content-movie">
                        <swiper :slidesPerView="4" :spaceBetween="20" :centeredSlides="true" :pagination="{clickable: true,}" :modules="modules" class="mySwiper">
                            <swiper-slide v-for="(item, index) in store.listMovies"><AppCard :card="item"/></swiper-slide>
                        </swiper>
                    </div>
                    <!-- <div class="content-movie d-flex justify-content-between">
                        <AppCard  v-for="(item, index) in store.listMovies" :key="index" :card="item"/>
                    </div> -->
                    <h4>Lista Serie Tv</h4>
                    <div class="content-tv">
                        <swiper :slidesPerView="4" :spaceBetween="30" :centeredSlides="true" :pagination="{clickable: true,}" :modules="modules" class="mySwiper">
                            <swiper-slide v-for="item in store.listTv"><AppSerie :card="item"/></swiper-slide>
                        </swiper>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
h4 {
    color: white;
}

.content-movie,
.content-tv {
    height: 383px;
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
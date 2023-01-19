import { reactive } from "vue";

export const store = reactive({
    /* Url Movies */
    url: "https://api.themoviedb.org/3/search/movie?api_key=94aae2b5acebe74817ce0fcf89c173dc&language=it-IT&query=",
    listMovies: [],

    /* Url series tv */
    urlseries: "https://api.themoviedb.org/3/search/tv?api_key=94aae2b5acebe74817ce0fcf89c173dc&language=it_IT&query=",
    listTv: [],

    /* Url country */
    urlcountry: "https://flagcdn.com/en/codes.json",
    listCountry: [],

    /* Array menu */
    listMenu: [
        'Home', 'Serie TV', 'Originali', 'Aggiunti di recente', 'La mia lista'
    ]



})
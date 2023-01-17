import { reactive } from "vue";

export const store = reactive({
    url: "https://api.themoviedb.org/3/search/movie?api_key=94aae2b5acebe74817ce0fcf89c173dc&language=it-IT&query=",
    urlseries: "https://api.themoviedb.org/3/search/tv?api_key=94aae2b5acebe74817ce0fcf89c173dc&language=it_IT&query=",
    listMovies: [],
    listTv: [],
    listCountry: [],
    urlcountry: "https://flagcdn.com/en/codes.json"

})
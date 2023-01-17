import { reactive } from "vue";

export const store = reactive({
    url: "https://api.themoviedb.org/3/search/movie?api_key=94aae2b5acebe74817ce0fcf89c173dc&language=it-IT&query=",
    resultslist: []
})
const app = Vue.createApp({
    data() {
        return {
            tipo: false,          //true = film      false = serie
            id: 0,
            type: movie,
        }
    },
    mounted(){
        let url = new URLSearchParams(location.search)
        id = url.get('id')
        type = url.get('type')
    }
})
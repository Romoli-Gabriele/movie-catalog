const app = Vue.createApp({
    data() {
        var url = new URLSearchParams(location.search);
        return {

            tipo: false, //true = film      false = serie
            type: url.get('type'),
            idF: url.get('id'),
        }
    },


})
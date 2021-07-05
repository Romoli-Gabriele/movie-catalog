const app = Vue.createApp({
    data() {
        return {
            
            tipo: false,         //true = film      false = serie
            type: "",
            idF: "",
        }
    },
    mounted(){
        var url = new URLSearchParams(location.search);
        this.idF = url.get('id');
        this.type = url.get('type');
    },

})
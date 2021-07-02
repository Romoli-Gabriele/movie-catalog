app.component('homepage', {

    props: {
        tipo: {
            type: Boolean,
            required: true,
        }
    },
    template:
        /*html*/
        `
    <div class="row row-cols-xs-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4  g-5">
            <trending-card :movieList=" movieList"></trending-card>
    </div>
`,
    data(){
        return{
            movieList: [],
        }

    },

    mounted() {
        if (this.tipo) {
        fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=6f9286d54de4891ea7a5c91779e09786')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.movieList = data.results;



            });
        } else {
        fetch('https://api.themoviedb.org/3/trending/tv/week?api_key=6f9286d54de4891ea7a5c91779e09786')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.movieList = data.results;
            });

    }



}

})
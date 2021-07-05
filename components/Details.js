app.component('dettagli', {

    props: {
        type: {
            type: String,
            required: true,
        },
        idf: {
            type: String,
            required: true,
        }

    },
    template:
        /*html*/
        `
        <div  class="card bg-dark">
           <h1 class="text-light">{{this.idf}}</h1>
           <h1 class="text-light">{{this.type}}</h1>
           
        </div>
        `,
    data() {

        return {
            movie: null,
            mezza: false, //mezza stella
            mezzo: false, // mezzo cuore
            languageList: [{
                iso_639_1: "de",
                english_name: "German",
                name: "Deutsch"
            }, {
                iso_639_1: "it",
                english_name: "Italian",
                name: "Italiano"
            }, {
                iso_639_1: "ja",
                english_name: "Japanese",
                name: "日本語"
            }, {
                iso_639_1: "fr",
                english_name: "French",
                name: "Français"
            }, {
                iso_639_1: "en",
                english_name: "English",
                name: "English"
            }, {
                iso_639_1: "es",
                english_name: "Spanish",
                name: "Español"
            }],
            genresList: [{
                "id": 28,
                "name": "Action"
            }, {
                "id": 12,
                "name": "Adventure"
            }, {
                "id": 16,
                "name": "Animation"
            }, {
                "id": 35,
                "name": "Comedy"
            }, {
                "id": 80,
                "name": "Crime"
            }, {
                "id": 99,
                "name": "Documentary"
            }, {
                "id": 18,
                "name": "Drama"
            }, {
                "id": 10751,
                "name": "Family"
            }, {
                "id": 14,
                "name": "Fantasy"
            }, {
                "id": 36,
                "name": "History"
            }, {
                "id": 27,
                "name": "Horror"
            }, {
                "id": 10402,
                "name": "Music"
            }, {
                "id": 9648,
                "name": "Mystery"
            }, {
                "id": 10749,
                "name": "Romance"
            }, {
                "id": 878,
                "name": "Science Fiction"
            }, {
                "id": 10770,
                "name": "TV Movie"
            }, {
                "id": 53,
                "name": "Thriller"
            }, {
                "id": 10752,
                "name": "War"
            }, {
                "id": 37,
                "name": "Western"
            }],
            genresListS: [{
                "id": 10759,
                "name": "Action & Adventure"
            }, {
                "id": 16,
                "name": "Animation"
            }, {
                "id": 35,
                "name": "Comedy"
            }, {
                "id": 80,
                "name": "Crime"
            }, {
                "id": 99,
                "name": "Documentary"
            }, {
                "id": 18,
                "name": "Drama"
            }, {
                "id": 10751,
                "name": "Family"
            }, {
                "id": 10762,
                "name": "Kids"
            }, {
                "id": 9648,
                "name": "Mystery"
            }, {
                "id": 10763,
                "name": "News"
            }, {
                "id": 10764,
                "name": "Reality"
            }, {
                "id": 10765,
                "name": "Sci-Fi & Fantasy"
            }, {
                "id": 10766,
                "name": "Soap"
            }, {
                "id": 10767,
                "name": "Talk"
            }, {
                "id": 10768,
                "name": "War & Politics"
            }, {
                "id": 37,
                "name": "Western"
            }],
        }
    },
    methods: {
        wait() {
            
            fetch('https://api.themoviedb.org/3/'+this.movie+'/' + this.idf + '?api_key=6f9286d54de4891ea7a5c91779e09786&language=en-US')
                .then(response => response.json())
                .then(data => {
                    this.movie = data.results;
                });
        }


    },

    mounted() {
        this.wait();



    }



})
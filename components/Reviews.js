app.component('reviews', {
    props: {
        full: {
            type: String,
            required: true,
        },
        half:{
            type: String,
            required: true,
        },
        valH:{
            type: Boolean,
            required: true,
        },
        empty:{
            type: String,
            required: true,
        },
        value:{
            type: Number,
            required: true,
        },
        valE:{
            type: Number,
            required: true,
        },
        color:{
            type: String,
            required: true,
        },


    },

    template:
        /*html*/
    `
    <i v-for="c in this.value" class="fas" :class="full + ' ' +color"></i>
    <i v-show="this.valH" class="fas" :class=" half+' '+color"></i>
    <i v-for="o in this.valE" class="far" :class="empty+' '+color" ></i>
    
    `,


    
})
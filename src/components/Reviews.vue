<template>
    
    <div>
        <i :key="c" v-for="c in calcF(value)" class="fas" :class="full + ' ' +color"></i>
        <i v-show="mezzo" class="fas" :class=" half+' '+color"></i>
        <i :key="o" v-for="o in calcW(value)" class="far" :class="empty+' '+color" ></i>
        
    </div>

</template>

<script>

export default {
    name: "Reviews",
    
    props: {
        type:{
            type: Boolean,
            required: true,
        },
        full: {
            type: String,
            required: true,
        },
        half:{
            type: String,
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
        color:{
            type: String,
            required: true,
        },


    },

    data(){
        return{
            mezzo: false,
        }
        
    },
    methods:{
        calcF(x) { 
            if(this.type){
                x = x / 2;
            if (x - Math.round(x) >= 0.35 || x - Math.round(x) <= -0.35) {
                this.mezzo = true;
                x--;

            }
            return Math.round(x)
        }else{
            x = x / 1000;
            if (x - Math.round(x) >= 0.4 || x - Math.round(x) <= -0.4) {
                if (x < 5) {
                    this.mezzo = true;
                }

            } else {
                this.mezzo = false
            }

            if (Math.round(x) > 5) {

                return 5
            }

            return Math.round(x) > 0 ? Math.round(x) : 0
        }
            
        },
        
        calcW(x) {
            let y = this.calcF(x);

            y = 5 - y;
            if (this.mezzo && y > 0) {
                y--;

            }
            
            return y;
        },

    }

}
</script>

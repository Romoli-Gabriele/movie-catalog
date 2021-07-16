<template>
  <div>
    <i
      :key="c"
      v-for="c in calcF(value)"
      class="fas"
      :class="full + ' ' + color"
    ></i>
    <i v-show="mezzo" class="fas" :class="half + ' ' + color"></i>
    <i
      :key="o"
      v-for="o in calcW(value)"
      class="far"
      :class="empty + ' ' + color"
    ></i>
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
                x /= 2;
            }else{
                x /= 1000;
            }
            Math.round(x * 10) / 10;
            if(x >= 5){
                return 5;
            }else if (x - Math.trunc(x) >= 0.39 && x - Math.trunc(x) <= 0.61) {
                this.mezzo = true;
                return Math.trunc(x)
            }else{
                return Math.round(x);
            }
            
        },
        
        calcW(x) {
            let y = this.calcF(x);

            y = 5 - y;
            if (this.mezzo && y > 0 ) {
                y--;

            }
            
            return y;
        },

    }

}
</script>

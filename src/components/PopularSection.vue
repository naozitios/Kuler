<template>
    <div id="section-main">
        <h5 id="section-title">Popular Among Buyers</h5>
        <CarouselScrollPopular/>
    </div>
</template>



<script>
import CarouselScrollPopular from '@/components/CarouselScrollPopular.vue'

export default {
    name: 'PopularSection',
    components:{
    CarouselScrollPopular
  },
  data(){
    
  },
  methods:{
   
  }
}
</script>

<style scoped>
#section-main {
    padding: 2em 2em 2em 2em;
    background-color: #F7F0DD;
}
#section-main #section-title{
    font-weight: 900;
    text-align: left;
}


</style>


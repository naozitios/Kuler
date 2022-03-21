<template>
    <div id="section-main">
        <h5 id="section-title">Similar Items</h5>
        <CarouselScrollTopPicks/>
        <br>
    </div>
</template>



<script>
import CarouselScrollTopPicks from '@/components/CarouselScrollTopPicks.vue'

export default {
    name: 'SimilarItems',
    components:{
    CarouselScrollTopPicks
  },
  data(){
    
  },
  methods:{
   
  }
}
</script>

<style scoped>
#section-main {
    padding: 5em 2em 0em 2em;
    background-color: #F7F0DD;
}
#section-main #section-title{
    font-weight: 900;
    text-align: left;
}


</style>


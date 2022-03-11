<template>
    <div id="section-main">
        <h5 id="section-title">Top Picks by National Arts Gallery</h5>
        <CarouselScrollEight/>
    </div>
</template>



<script>
import CarouselScrollEight from '@/components/CarouselScrollEight.vue'

export default {
    name: 'TopPicksSection',
    components:{
    CarouselScrollEight
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


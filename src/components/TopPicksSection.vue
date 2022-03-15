<template>
    <div id="section-main">
        <h5 id="section-title">Top Picks by National Arts Gallery</h5>
        <CarouselScrollTopPicks/>
    </div>
</template>



<script>
import CarouselScrollTopPicks from '@/components/CarouselScrollTopPicks.vue'

export default {
    name: 'TopPicksSection',
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
    padding: 2em 2em 0em 2em;
    background-color: #F7F0DD;
}
#section-main #section-title{
    font-weight: 900;
    text-align: left;
}


</style>


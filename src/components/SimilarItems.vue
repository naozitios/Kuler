<template>
    <div id="section-main">
        <h5 id="section-title">Similar Items</h5>
        <CarouselScrollSimilarItems :productNumber="productNumber"/>
        <br>
    </div>
</template>



<script>
import CarouselScrollSimilarItems from '@/components/carousel_components/CarouselScrollSimilarItems.vue'

export default {
    name: 'SimilarItems',
    components:{
    CarouselScrollSimilarItems
  },

  methods:{
   
  },

  props: {
      productNumber: String
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


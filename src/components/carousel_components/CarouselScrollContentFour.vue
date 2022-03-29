<template>
    <div id="parentContainer">
        
        
        <div id = "productCard1">
           <ProductCard/>
        </div>

        <div id = "productCard2">
            <ProductCard/>
        </div>

        <div id = "productCard3">
            <ProductCard/>
        </div>

        <div id = "productCard4">
            <ProductCard/>
        </div>
    </div>
    
</template>



<script>
import ProductCard from '@/components/ProductCard.vue'
export default {
  name: 'CarouselScrollContentFour',
  components:{
    ProductCard
  },
  methods:{
   
  }
}
</script>

<style scoped>
#parentContainer {
    display: flex;
    flex-direction: row;
    background-color: transparent;
}

#productCard1, #productCard2, #productCard3, #productCard4 {
    flex-grow: 1;
    flex-basis: 0;
}
</style>


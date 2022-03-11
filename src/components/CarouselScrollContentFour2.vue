<template>
    <div id="parentContainer">
        
        
        <div id = "productCard1">
           <ProductCard2/>
        </div>

        <div id = "productCard2">
            <ProductCard2/>
        </div>

        <div id = "productCard3">
            <ProductCard2/>
        </div>

        <div id = "productCard4">
            <ProductCard2/>
        </div>
    </div>
    
</template>



<script>
import ProductCard2 from '@/components/ProductCard2.vue'
export default {
  name: 'CarouselScrollContentFour2',
  components:{
    ProductCard2
  },
  data(){
    
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


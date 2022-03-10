<template>
<div id = "ProductContainer"> 
  <div id = "scroll">
  <ProductScroll/>
  </div>
  <div id = "description">
    Hi!
    </div>
</div>
</template>

<script>
import ProductScroll from '@/components/ProductScroll.vue'

export default {
  name: 'App',
  components:{
    ProductScroll,
  },
  data(){
    
  },
  methods:{
   
  }
}
</script>


<style>
    @import url(https://fonts.googleapis.com/css?family=Open+Sans);
    #app {
        font-family: 'Open Sans', Verdana, Geneva, Tahoma, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
    .productContainer {
      width:80%;
      height:500px;
      margin:0 auto;
      background-color: #ffe;
    }
    .scroll {
      flex-grow: 2;
      flex-basis: 2;
    }
    .description {
      flex-grow: 0;
      flex-basis: 0;
    }
    /* #bg{
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 60%;
    } */
</style>
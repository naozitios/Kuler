<template>
  <div class="float-container">
  <div class= "first-child">
  <ProductScroll/>
  </div>
  <div class = "second-child">
    <ProductInformation/>
    </div>
  </div>
  <TopPicksSection/>
</template>

<script>
import ProductScroll from '@/components/ProductScroll.vue';
import ProductInformation from '@/components/ProductInformation.vue'
import TopPicksSection from '@/components/ProductInformation.vue'

export default {
  name: 'App',
  components:{
    ProductScroll,
    ProductInformation,
    TopPicksSection
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

    .float-container {
      display: flex;
      margin-left: 20px
    }

    
    /* #bg{
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 60%;
    } */
</style>
<template>
  <div class="float-container">
  <div class= "first-child">  
  <ProductScroll/>
  </div>
  <div class = "second-child">
    <ProductInformation/>
    </div>
  </div>
<Reviews/>
<SimilarItems/>
<FooterMain/>
</template>

<script>
import ProductScroll from '@/components/ProductScroll.vue';
import SimilarItems from '@/components/SimilarItems.vue';
import ProductInformation from '@/components/ProductInformation.vue';
import Reviews from '@/components/Reviews.vue';
import FooterMain from '@/components/FooterMain.vue'


export default {
  name: 'App',
  components:{
    ProductScroll,
    ProductInformation,
    SimilarItems,
    Reviews,
    FooterMain
  },
  data(){
    
  },
  methods:{
   
  }
}
</script>


<style scoped>
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
    .first-child {
      margin-top: 2%;
      min-width: 65%
    }
    .first {
      min-width: 60%
    }
    
    .second-child {
      margin-top: 2%;
    }
    /* #bg{
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 60%;
    } */
</style>
<template>
  <div class="float-container">
  <div class= "first-child">  
  <SellerListThumbnails/>
  </div>
  </div>
</template>

<script>
import SellerListThumbnails from '@/components/SellerListThumbnails.vue';



export default {
  name: 'SellerListPage',
  components:{
    SellerListThumbnails
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

    /* #bg{
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 60%;
    } */
</style>
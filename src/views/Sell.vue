<template>
  <div class="float-container">  
    <ListThumbnails/>
    <div class = "first-container">
    <ListImages/>
    <ListDescription/>
    </div>
    <ListInformation/>
  </div>
</template>

<script>

import ListThumbnails from '@/components/xh_components/ListThumbnails.vue'
import ListImages from '@/components/xh_components/ListImages.vue'
import ListDescription from '@/components/xh_components/ListDescription.vue'
import ListInformation from '@/components/xh_components/ListInformation.vue'


export default {
  name: 'Sell',
  components:{
    ListThumbnails,
    ListImages,
    ListDescription,
    ListInformation,
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
      margin-left: 30px
    }

    .first-container {
    width: 70%;
    flex-direction: column;
}

    /* #bg{
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 60%;
    } */
</style>
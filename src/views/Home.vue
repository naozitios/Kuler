<template>
    <HomeBanner/>
</template>

<script>
import HomeBanner from '@/components/HomeBanner.vue'


export default {
  name: 'App',
  components:{
    HomeBanner,
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

    #bg{
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 60%;
    }
</style>

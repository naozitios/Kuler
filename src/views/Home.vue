<template>
    <HomeBanner/>
    <FooterMain/>
    <FeedbackFooter/>
    <!-- <StarRating/> -->
</template>

<script>
import HomeBanner from '@/components/HomeBanner.vue'
import FeedbackFooter from '@/components/FeedbackFooter.vue'
import FooterMain from '@/components/FooterMain.vue'
// // import CarouselScroll from '@/components/CarouselScroll.vue'
// import StarRating from '@/components/StarRating.vue'


export default {
  name: 'Home',
  components:{
    HomeBanner,
    FeedbackFooter,
    FooterMain
    // // // CarouselScroll,
    // StarRating
  },
  data(){
    
  },
  methods:{
   
  }
}
</script>

<style>
    @import url(https://fonts.googleapis.com/css?family=Open+Sans);
    /* #app {
        font-family: 'Open Sans', Verdana, Geneva, Tahoma, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    } */
    /* #bg{
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 60%;
    } */
</style>

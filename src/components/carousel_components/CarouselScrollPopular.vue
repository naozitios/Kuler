<template>
    <div id="carouselExampleIndicators1" class="carousel slide" data-bs-ride="carousel">
  
  <div class="carousel-inner" >
    <div class="carousel-item active">
      <CarouselScrollContentFour/>
    </div>
    <div class="carousel-item">
      <CarouselScrollContentFour2/>
    </div>
    <div class="carousel-item">
      <CarouselScrollContentFour/>
    </div>
  </div>

  <div id="control-left">
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  </div>

  <div id="control-right">
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
  </div>
</div>
</template>

<script>
import CarouselScrollContentFour from '@/components/carousel_components/CarouselScrollContentFour.vue'
import CarouselScrollContentFour2 from '@/components/carousel_components/CarouselScrollContentFour2.vue'

export default {
  name: 'CarouselScrollPopular',
  components:{
    CarouselScrollContentFour,
    CarouselScrollContentFour2
  },
  methods:{
   
  }

}
</script>

<style scoped>
.carousel .carousel-item {
    /* height: 500px; */
  }

  /* .carousel-item img {
      position: absolute;
      object-fit:auto;
      top: 0;
      left: 0;
      min-height: 500px;
  } */

  /* #carouselExampleIndicators {
    justify-content: center;
    display: flex;
    flex-direction: row;

  }

  .carousel-inner{
    flex-grow: 4;
    flex-basis: auto;

  }

  #control-left{
    flex-grow: 1;
    flex-basis: 0;

  }

  #control-right{
    flex-grow: 1;
    flex-basis: 0;

  } */

</style>
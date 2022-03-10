<template>
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <!-- <img src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg" class="d-block w-100" alt="..."> -->
      <CarouselScrollContentFour/>
    </div>
    <div class="carousel-item">
      <!-- <img src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg" class="d-block w-100" alt="..."> -->
      <CarouselScrollContentFour2/>
    </div>
    <div class="carousel-item">
      <img src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg" class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</template>

<script>
import CarouselScrollContentFour from '@/components/CarouselScrollContentFour.vue'
import CarouselScrollContentFour2 from '@/components/CarouselScrollContentFour2.vue'

export default {
  name: 'CarouselScrollEight',
  components:{
    CarouselScrollContentFour,
    CarouselScrollContentFour2
  },
  data(){
    
  },
  methods:{
   
  }

}
</script>

<style scoped>
.carousel .carousel-item {
    height: 500px;
  }

  .carousel-item img {
      position: absolute;
      object-fit:auto;
      top: 0;
      left: 0;
      min-height: 500px;
  }

</style>
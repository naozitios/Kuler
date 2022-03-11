<template>
      <div id="banner-searchResults">
        <img src="@/assets/banner-Results.jpg" 
        alt="Banner" class="img-fluid">
    </div>
  <div class="container">
  <div class="row justify-content-md-center">
    <div class="col col-lg-2">
      1 of 3
    </div>
    <div class="col-md-auto">
      Variable width content
    </div>
    <div class="col col-lg-2">
      3 of 3
    </div>
  </div>
  <div class="row">
    <div class="col-lg-2">
      <FilterOptions/>
    </div>
    <div class="col-md-auto">
      <CarouselScroll/>
    </div>
  </div>
</div>
  <div>
  </div>
</template>
<style>
.work-page {
  width: 80vmax;
  margin-left: auto;
}
#banner-searchResults {
  width: 100%;
  height: auto;
  margin-left: auto;
  margin-right: auto;
}
</style>

<script>
import FilterOptions from '@/components/FilterOptions.vue'
import CarouselScroll from '@/components/CarouselScroll.vue'

export default {
  name: 'App',
  components:{
    FilterOptions,
    CarouselScroll
  },
  data(){
    
  },
  methods:{
   
  }
}
</script>

<template>
<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class ="container">
    <div class="carousel-indicators">
    <div class ="1-child"> 
    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active">
    <img src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg" class="d-block w-100"></li>
    </div>
    <div class = "2-child">
    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1">
    <img src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg" class="d-block w-100" ></li>
    </div>
    <div class = "3-child">
    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2">
    <img src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg" class="d-block w-100" ></li>
    </div>
    <div class = "4-child">
    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3">
    <img src="https://cdn.mos.cms.futurecdn.net/uWjEogFLUTBc8mSvagdiuP-970-80.jpg.webp" class="d-block w-100" ></li>
    </div>
    
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://cdn.mos.cms.futurecdn.net/uWjEogFLUTBc8mSvagdiuP-970-80.jpg.webp" class="d-block w-100" alt="...">
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
  
  
  </div>


</div>
</template>

<script>
export default {

  name: 'ProductScroll',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.carousel-indicators {
  display: flex;
  flex-direction: column;
  margin-left: 1%;
  margin-right: 1%;
  margin-top: 1%;
}

.container {
  display: flex;
}
.carousel-indicators li{ /*button[data-bs-target] for Bootstrap 5*/
    height: 100%;
    width: 120px;
}

.carousel-indicators {
  position: static;
}

.carousel{
  width: 100%;
}


</style>
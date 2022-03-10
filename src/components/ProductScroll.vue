<template>
  
  <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel" >
  <div class="carousel-indicators">
  <a href="#" data-bs-target="#carouselExampleControls" data-bs-slide-to="0" class="active" ><img src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"
  class ="indicator1"></a>
  <a href="#" data-bs-target="#carouselExampleControls" data-bs-slide-to="1"><img src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"
  class ="indicator2"></a>
  <a href="#" data-bs-target="#carouselExampleControls" data-bs-slide-to="2"><img src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"
  class ="indicator3"></a>
  <a href="#" data-bs-target="#carouselExampleControls" data-bs-slide-to="3"><img src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"
  class ="indicator4"></a>
  </div>
  
  
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg" class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
  
  
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
.carousel {
  height: 60%;
  width: 60%;
  margin: 0 auto;
  position: absolute;
  top: 250px;
  left: 200px;
}
.carousel-item,
.carousel-item .active,
.carousel-inner
{
  height: 100%;
}
.carousel-indicators li{display:none;}
.carousel-indicators {
  bottom: 350px;
  left:250px; 
  width: 250px; 
  height:200px; 
  margin: 20px;
  position:absolute;
}
.indicator1 {
  width:75px;
  height:75px;
  position:relative; 
  top:150px; 
  bottom:0; 
  left:100px; 
  right:0; 
  margin:auto;
}
.indicator2 {
  width:75px;
  height:75px;
  position:relative; 
  top:250px; 
  bottom:0; 
  left:63px; 
  right:0; 
  margin:auto;
}
.indicator3 {
  width:75px;
  height:75px;
  position:relative; 
  top:350px; 
  bottom:0; 
  left:26px; 
  right:0; 
  margin:auto;
}
.indicator4 {
  width:75px;
  height:75px;
  position:relative; 
  top:450px; 
  bottom:0; 
  left:-11px; 
  right:0; 
  margin:auto;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
a {
  color: #42b983;
}
</style>
<template>
<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class ="container">
    <div class="carousel-indicators">
    <div class ="1-child"> 
    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active">
    <img src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2017%2F01%2Fwinnie-the-pooh-3.jpg" class="d-block w-100"></li>
    </div>
    <div class = "2-child">
    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1">
    <img src="https://www.denofgeek.com/wp-content/uploads/2018/10/tom-and-jerry-warner-bros.jpg" class="d-block w-100" ></li>
    </div>
    <div class = "3-child">
    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2">
    <img src="https://static3.srcdn.com/wordpress/wp-content/uploads/2021/12/Dora-The-Explorer.jpg" class="d-block w-100" ></li>
    </div>
    <div class = "4-child">
    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3">
    <img src="https://assets.change.org/photos/5/to/mc/QhtOMceKjIXxqye-800x450-noPad.jpg?1627493939" class="d-block w-100" ></li>
    </div>
    
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2017%2F01%2Fwinnie-the-pooh-3.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://www.denofgeek.com/wp-content/uploads/2018/10/tom-and-jerry-warner-bros.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://static3.srcdn.com/wordpress/wp-content/uploads/2021/12/Dora-The-Explorer.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://assets.change.org/photos/5/to/mc/QhtOMceKjIXxqye-800x450-noPad.jpg?1627493939" class="d-block w-100" alt="...">
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


.carousel-indicators img {
  width: 75px;
  height: 75px;
}

.carousel-inner img {
  height: 500px;
}

.carousel-inner {
  width: 100%;
  
}

</style>
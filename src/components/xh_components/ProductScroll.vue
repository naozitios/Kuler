<template>
<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class ="container">
    <div class="carousel-indicators">
    <div class ="1-child"> 
    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active">
    <img :src= "coverPicture" class="d-block w-100"></li>
    </div>
    <div class = "2-child">
    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1">
    <img :src= "firstSupportingPicture" class="d-block w-100" ></li>
    </div>
    <div class = "3-child">
    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2">
    <img :src="secondSupportingPicture" class="d-block w-100" ></li>
    </div>
    <div class = "4-child">
    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3">
    <img :src="thirdSupportingPicture" class="d-block w-100" ></li>
    </div>
    
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img :src="coverPicture" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img :src="firstSupportingPicture" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img :src="secondSupportingPicture" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img :src="thirdSupportingPicture" class="d-block w-100" alt="...">
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
import firebaseApp from '../../firebase.js';
import {getFirestore} from "firebase/firestore";
import {doc, getDoc} from "firebase/firestore";
const db = getFirestore(firebaseApp);

export default {

  name: 'ProductScroll',
  props: {
    msg: String,
    productID: String
  },

  mounted() {
    this.updatePictures();
  },

  data() {
            return {
                  coverPicture: null,
                  firstSupportingPicture: null,
                  secondSupportingPicture: null,
                  thirdSupportingPicture: null,
            }
  },
  methods: {
    async updatePictures() { // i assume that productID is given, i put a hypothethical value of 3
      const docRef = doc(db, "products", (this.productID).toString()) // change ID
      const docData = await getDoc(docRef)
      const actualData = docData.data()
      this.coverPicture = actualData.coverimage
      this.firstSupportingPicture = actualData.image1
      this.secondSupportingPicture = actualData.image2
      this.thirdSupportingPicture = actualData.image3
    }
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
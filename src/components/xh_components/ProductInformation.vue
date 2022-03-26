<template>
  <div id ="product-information">
      <!-- first section -->
      <div id= "user-information">
      <div id="user-pic">
      <img src="@/assets/user_pic.jpg" alt="User">
      </div>
      <div id="user-info-text"> 
          <div id= "user-name">
          <h5> Ng Xiang Han </h5> <!-- change, link name to DB -->
          </div>
          <div id= "rating">
          <StarRating/>
          </div>
      </div>  
      </div>
      <!-- second section -->
      <div id = "second-container">
      <div id= "product-title">
          <h2> {{title}} </h2> <!-- change, link description to DB -->
      </div>
      <!-- third section -->
      <div id = "price"> 
          <h2> SGD {{price}} </h2> <!-- change, link price to DB -->
          </div>
      </div>
      <!-- fourth section -->

      

      <div class="btns">
        <div class="cartbtn">
        <AddToCartButton/>
        </div>
        <div class="favourite-button"> 
          <FavouriteClick/>
      </div>
      </div>

      <div class= "product-text"> 
          {{description}}
      </div>

      

</div>
</template>

<script>
import firebaseApp from '../../firebase.js';
import {getFirestore} from "firebase/firestore";
import {doc, getDoc} from "firebase/firestore";
const db = getFirestore(firebaseApp);
import StarRating from '@/components/StarRating.vue'
import AddToCartButton from '@/components/xh_components/AddToCartButton.vue'
import FavouriteClick from '@/components/xh_components/FavouriteClick.vue'


export default {
    name: 'ProductInformation',
  components:{
    StarRating,
    AddToCartButton,
    FavouriteClick
  },
  data(){
    return {
        description: null,
        price: null,
        title: null,
        productID: 2 // change!!
    }
  },
  methods:{
        async updateData() {
          const docRef = doc(db, "products", (this.productID).toString()) // change ID
          const docData = await getDoc(docRef)
          const actualData = docData.data()
          this.description = actualData.description
          this.price = actualData.price
          this.title = actualData.caption
      }
  },

  mounted() {
      this.updateData()
  }


}
</script>

<style scoped>
img {
  border-radius: 50%;
  max-width: 100%;
  float: left;

}

#product-information {
    display: flex;
    flex-direction: column;
    margin-left: 10%;
    margin-top: 2%;
    margin-right: 5%;
}

#user-pic {
   width: 8%;
}

#user-information {
    display: flex;
}


#user-info-text {
    display: flex;
    flex-direction: column;
}

#product-title {
    margin-top: 5%;
    text-align: left;
}

.btns {
    display: flex;
    margin-top: 5%;
    
}

.cartbtn {
    width: 80%;
    margin-left: -2%;
}

.favourite-button {
    margin-left: 4%;
}

#price {
    text-align: left;
    margin-top: 12px;
}

.product-text {
    margin-top: 5%;
    text-align: left;
    margin-left: 1%;
}

#second-container {
    margin-top: 2%;
    border-radius: 10px;
}

</style>
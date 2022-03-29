<template>
  <div id ="product-information">
      <!-- first section -->
      <div id= "user-information">
      <div id="user-pic">
      <img :src="sellerPicture" alt="User">
      </div>
      <div id="user-info-text"> 
          <div id= "user-name">
          <h5> {{sellerName}} </h5> <!-- change, link name to DB -->
          </div>
          <div id= "rating">
          <b><u>{{this.rating.toFixed(1)}}</u></b>
          <StarRatingContinuous :rating = "rating"/>
           {{this.numberOfReviews}} Reviews
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

      <div class = "counter">
              <div class = "quantityText"> Quantity: </div>
              <span class="minus" @click="subtract">-</span>
              <div class = "quantity">{{quantity}}</div>
              <span class="plus" @click="add">+</span>
      </div>
      <div class="btns">
              
            
        <div class="cartbtn">
        <AddToCartButton :quantity = "quantity"/>
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
import StarRatingContinuous from '@/components/xh_components/StarRatingContinuous.vue'
import AddToCartButton from '@/components/xh_components/AddToCartButton.vue'
import FavouriteClick from '@/components/xh_components/FavouriteClick.vue'


export default {
    name: 'ProductInformation',
  components:{
    StarRatingContinuous,
    AddToCartButton,
    FavouriteClick
  },
  data(){
    return {
        description: null,
        price: null,
        title: null,
        sellerID : null,
        sellerName: null,
        sellerPicture: null,
        productID: 2, // change!!
        quantity: 1,
        rating: 2.5, // pull from DB
        numberOfReviews: 5 // pull from DB
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

          // seller details
          this.sellerID = actualData.user_id
          const userRef = doc(db, "users", this.sellerID)
          const userDataRef = await getDoc(userRef)
          const userData = userDataRef.data()
          this.sellerName = userData.display_name
          this.sellerPicture = userData.photo
      },
      add() {
          this.quantity +=1
      },
      subtract() {
          this.quantity -= 1
          if (this.quantity == 0) {
              this.quantity = 1
          }
      }
  },

  mounted() {
      this.updateData()
      .then(() => console.log(this.sellerPicture))
  }


}
</script>

<style scoped>
h5{
    /* margin-left: 5%; */
}
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

img {
   width:75px;
    height:75px;
    border-radius:50%;
    padding-left:0%;
    /* object-fit: contain; */
    /* border:4px solid #333 */
}

#user-information {
    display: flex;
}


#user-info-text {
    display: flex;
    flex-direction: column;
    flex-basis: 1;
    flex-grow: 1;
    margin-left: 5%;
    text-align: left;
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
    margin-top: 2%;
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

.minus, .plus {
  width: 8%;
  background:#F37381;
  padding:0px 2px 2px 2px;
  vertical-align: middle;
  text-align: center;
  float: left;
  color: white;
  cursor: pointer
}

.quantity {
    width: 10%;
    border: 1px solid #F37381;
    display: inline
}

.quantityText {
    padding-right: 5%;
}

.counter {
    display: flex;
    margin-top: 5%;
}

</style>
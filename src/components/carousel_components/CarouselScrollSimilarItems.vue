<template>
    <div id="carouselExampleIndicators2" class="carousel slide" data-bs-ride="carousel">
  
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="row justify-content-start">
      <div
      v-for="product in products.slice(0,4)" 
      :key="product.id"
      style="width: 24vw"

    >
      <ProductCard3
        :sellerName="product.display_name"
        :productTitle="product.caption"
        :price="product.price"
        :coverImage="product.coverimage"
        :productNumber="product.id"
        :quantity="product.quantity"
        :timestamp="product.timestamp"
        align="left"
      />
      </div>
      </div>
    </div>
    <div class="carousel-item">
      <div class="row justify-content-start">
      <div
      v-for="product in products.slice(4,8)" 
      :key="product.id"
      style="width: 24vw"

    >
      <ProductCard3
        :sellerName="product.display_name"
        :productTitle="product.caption"
        :price="product.price"
        :coverImage="product.coverimage"
        :productNumber="product.id"
        :quantity="product.quantity"
        :timestamp="product.timestamp"
        align="left"
      />
      </div>
      </div>
    </div>
    <div class="carousel-item">
      <div class="row justify-content-start">
      <div
      v-for="product in products.slice(8,12)" 
      :key="product.id"
      style="width: 24vw"

    >
      <ProductCard3
        :sellerName="product.display_name"
        :productTitle="product.caption"
        :price="product.price"
        :coverImage="product.coverimage"
        :productNumber="product.id"
        :quantity="product.quantity"
        :timestamp="product.timestamp"
        align="left"
      />
      </div>
      </div>
    </div>
  </div>

  <div id="control-left">
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  </div>

  <div id="control-right">
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
  </div>
</div>
</template>

<script>

import ProductCard3 from "@/components/ProductCard3.vue";
import firebaseApp from "@/firebase.js";
import {
  getFirestore,
  getDocs,
  collection,
  getDoc,
  doc,
  query,
  where
} from "firebase/firestore";

const db = getFirestore(firebaseApp);

export default {
  name: 'CarouselScrollTopPicks',
  components:{
    ProductCard3
  },
  data() {
    return {
      products: [],
      category_id: 0
    }
  },

  props: {
    productNumber: String
  },

  mounted() {
    this.getCategoryId() // need to introduce a then. to make sure this resolves first
    .then(() => this.getProducts())
    console.log(this.products)
  },
  methods:{
   async getProducts() {
     let productsCollection;
     //console.log(this.category_id)
     productsCollection = query(collection(db, "products"), where("category_id", "==", this.category_id))
     let allProducts = await getDocs(productsCollection)
     allProducts.forEach(async product => {
       let user_id = product.data().user_id;
       const docARef = await getDoc(doc(db, "productratings", product.id))
        const docAData = docARef.data()
        var totalRatingA = 0
        docAData.num_stars.forEach(rating => totalRatingA += rating)
        if (docAData.reviews != 0) {
          totalRatingA = (totalRatingA / docAData.reviews).toFixed(2)
        }
        if (product.id !== this.productNumber) {
        this.getUser(user_id).then((user) => {
          this.products.push({
            ...product.data(),
            ...user.data(),
            id: product.id,
            rating: totalRatingA
          })
          this.products.sort(function(a, b) {
            return b.rating - a.rating
          })
        })
        }  
     })
     
   },

   async getUser(user_id) {
      return await getDoc(doc(db, "users", user_id));
    },

    async getCategoryId() {
      const docRef = await getDoc(doc(db, "products", this.productNumber))
      const docData = docRef.data()
      this.category_id = docData.category_id
      //console.log(this.category_id)
    }
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

  #carouselExampleIndicators2 {
    justify-content: center;
    display: flex;
    flex-direction: row;

  }

  .carousel-inner{
    margin-left: 1%;

  }

  .carousel-control-prev-icon {
    margin-left: -100%;
  }

  .carousel-control-next-icon {
    margin-right: -50%;

  }

  #control-left{
    flex-grow: 1;
    flex-basis: 0;

  }

  #control-right{
    flex-grow: 1;
    flex-basis: 0;

  }

</style>
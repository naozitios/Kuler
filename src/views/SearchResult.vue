<template>
  <div id="banner-searchResults">
    <img src="@/assets/banner-Results.jpg" alt="Banner" class="img-fluid" />
  </div>
  <div class="row">
    <div class="col-md-4 offset-md-8"><SortByButton /></div>
  </div>

  <div class="container pt-3" div="details">
    <div class="row">
      <div class="col-lg-2">
        <FilterOptions />
      </div>
      <div class="col-lg-10">
        <div class="row">
          <div
            class="col mb-3"
            v-for="(item, index) in products"
            :key="item.id"
          >
            <ProductCard3
              :sellerName="index.caption"
              :productTitle="index.caption"
              :price="price"
              :coverImage="coverImage"
            />
          </div>
          <div class="col mb-3">
            <ProductCard3
              :sellerName="sellerName"
              :productTitle="productTitle"
              :price="price"
              :coverImage="coverImage"
            />
          </div>
          <div class="col mb-3">
            <ProductCard3
              :sellerName="sellerName"
              :productTitle="productTitle"
              :price="price"
              :coverImage="coverImage"
            />
          </div>
          <div class="col mb-3">
            <ProductCard3
              :sellerName="sellerName"
              :productTitle="productTitle"
              :price="price"
              :coverImage="coverImage"
            />
          </div>
          <div class="col mb-3">
            <ProductCard3
              :sellerName="sellerName"
              :productTitle="productTitle"
              :price="price"
              :coverImage="coverImage"
            />
          </div>
        </div>
        <div class="row">
          <div class="col mb-3">
            <ProductCard3
              :sellerName="sellerName"
              :productTitle="productTitle"
              :price="price"
              :coverImage="coverImage"
            />
          </div>
          <div class="col mb-3">
            <ProductCard3
              :sellerName="sellerName"
              :productTitle="productTitle"
              :price="price"
              :coverImage="coverImage"
            />
          </div>
          <div class="col mb-3">
            <ProductCard3
              :sellerName="sellerName"
              :productTitle="productTitle"
              :price="price"
              :coverImage="coverImage"
            />
          </div>
          <div class="col mb-3"></div>
        </div>
      </div>
    </div>
  </div>
  <div></div>
</template>
<style>
.work-page {
  width: 80vmax;
  margin-left: auto;
}
#banner-searchResults img {
  width: 100%;
  height: 20vh;
}
</style>

<script>
import FilterOptions from "@/components/FilterOptions.vue";
import ProductCard3 from "@/components/ProductCard3.vue";
import SortByButton from "@/components/SortByButton.vue";
import firebaseApp from "../firebase.js";
import {
  getFirestore,
  getDocs,
  collection,
} from "firebase/firestore";

const db = getFirestore(firebaseApp);

export default {
  name: "App",
  components: {
    FilterOptions,
    ProductCard3,
    SortByButton,
  },
   data() {
    return {
      products: [],
      userids: [],
     }
  },
  mounted() {
    async function storeInfo() {
      const products = [];
      const users = [];
      let z = await getDocs(collection(db, "products"));
      //console.log(z)
      let x = await getDocs(collection(db, "users"));
      console.log('Pringint userse')
      console.log(x)
      z.forEach((docs) => {
        console.log('inside for loop')
        console.log(docs.data())
        let yy = docs.data();
        products.push(yy)
        console.log(yy)
      })
      x.forEach((docs) => {
        console.log('inside other for loop')
        console.log(docs.data())
        users.push(docs.data().display_name)
      })
    return products, users;
    }
    this.products, this.users = storeInfo()
    console.log(this.products)
  },
  methods: {
  },
};
</script>

<template>
        <div class="row justify-content-start">
          <div
            v-for="product in products"
            :key="product.id"
            style="width: 19vw"
            align="left"
            >
            <ProductCard3
              :sellerName="product.display_name"
              :productTitle="product.caption"
              :price="product.price"
              :coverImage="product.image3"
              :productNumber="product.id"
              align="left"
            />
            </div>
  </div>
    
</template>

<script>
import ProductCard3 from "@/components/ProductCard3.vue";
import firebaseApp from "@/firebase.js";
import {
  getFirestore,
  getDocs,
  collection, getDoc, doc, query, where
} from "firebase/firestore";

const db = getFirestore(firebaseApp);
export default {
  name: "App",
  components: {
    ProductCard3,
  },
  props: {
    category: Number,
    msg: String,
    profileID: String,
    userFavID: String
  },
  data() {
    return {
      products: [],
     }
     
  },
  mounted() {
    if (this.profileID) {
      this.getProfileProducts()
    } else if (this.userFavID) {
      this.getFavouriteProducts()
    } else {
      this.getProducts()
    }
  },
  methods: {
    async getProducts() {
      let productsCollection
      console.log(this.products)
      if (this.category == 0) {
        if (this.isEmptyOrSpaces(this.msg)) {
          console.log("empty or undefined")
          productsCollection = collection(db, "products");
        } else {
          console.log(this.msg)
          productsCollection = query(collection(db, "products"), where('caption', '>=', this.msg), where('caption', '<=', this.msg+ '\uf8ff'))
        }
      } else {
        productsCollection = query(collection(db, "products"), where('category_id', '==', this.category))
      }
      let selectedProducts = await getDocs(productsCollection);
      selectedProducts.forEach(product => {
        let user_id = product.data().user_id
        this.getUser(user_id).then(user => {
          this.products.push({...product.data(), ...user.data(), id: product.id})
          }
        )
      })
    },
    async getUser(user_id) {
      return await getDoc(doc(db, "users", user_id));
    },
    isEmptyOrSpaces(str) {
        return str === undefined || str.match(/^ *$/) !== null;
    },
    async getProfileProducts() {
      let productsCollection
      productsCollection = query(collection(db, "products"), where('user_id', '==', this.profileID))
      let selectedProducts = await getDocs(productsCollection);
      selectedProducts.forEach(product => {
        let user_id = product.data().user_id
        this.getUser(user_id).then(user => {
          this.products.push({...product.data(), ...user.data(), id: product.id})
        })
      })
    },

    async getFavouriteProducts() {
      const favouriteRef = doc(db, "userfavourites", this.userFavID)
      const favouriteRefData = await getDoc(favouriteRef)
      const favouriteData = favouriteRefData.data()
      const arrayOfProducts = favouriteData.products
      arrayOfProducts.forEach(async productIndex => {
        let product = await getDoc(doc(db, "products", productIndex))
        this.getUser(this.userFavID).then(user => {
          this.products.push({...product.data(), ...user.data(), id: product.id})
        })
      })
    }
  },
};
</script>

<style scoped>
</style>
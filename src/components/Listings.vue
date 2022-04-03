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
              :coverImage="product.coverimage"
              :productNumber="product.id"
              :quantity="product.quantity"
              :timestamp="product.timestamp"
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
    userFavID: String,
    historyID: String
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
    } else if (this.historyID) {
      this.getHistoricalProducts()
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
    },

    async getHistoricalProducts() {
      const docRef = doc(db, "users", this.historyID)
      const historyDocs = await getDocs(collection(docRef, "purchaseHistory"))
      historyDocs.forEach(async docs => {
        let productData = docs.data()
        let productPurchases = productData.purchases
        const date = new Date(productData.timestamp.toDate())
        Object.keys(productPurchases).forEach(async key => {
            console.log(productPurchases[key])
            let actualProduct = await getDoc(doc(db, "products", key))
            this.getUser(this.historyID).then(user => {
              this.products.push({...actualProduct.data(), ...user.data(), id: actualProduct.id,
              quantity: productPurchases[key], timestamp: date.toString()})
            })
        })
      })
    }
  },
};
</script>

<style scoped>
</style>
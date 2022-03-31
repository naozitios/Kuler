<template>
        <div class="row">
          <div
            class="col"
            v-for="product in products"
            :key="product.id"
            >
            <ProductCard3
              :sellerName="product.display_name"
              :productTitle="product.caption"
              :price="product.price"
              :coverImage="product.image3"
              :productNumber="product.id"
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
    msg: String
  },
  data() {
    return {
      products: [],
     }
     
  },
  mounted() {
    this.getProducts()
  },
  methods: {
    async getProducts() {
      let productsCollection
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
          this.products.push({...product.data(), ...user.data()})
          }
        )
      })
    },
    async getUser(user_id) {
      return await getDoc(doc(db, "users", user_id));
    },
    isEmptyOrSpaces(str) {
        return str === undefined || str.match(/^ *$/) !== null;
    }
  },
};
</script>
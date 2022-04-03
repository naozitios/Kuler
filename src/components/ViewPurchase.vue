<template>
<div class="scroll">
    <div
      class="col"
      v-for="product in product_list"
      :key="product.id"
    >
    <CartCard :editable = 'editable' :product='product'/>
    </div>
</div>
<div class="details">
<v-row align="left">
      <hr />
      <div class="row">
        <div class="col-sm-8"><h5>Subtotal</h5></div>
        <div class="col-sm-4"><h5>SGD {{this.total_price}}</h5></div>
      </div>
    </v-row>
    <hr />
    <v-row align="left">
      <div class="row">
      <div class="col-sm-8"><h4>Total</h4></div>
      <div class="col-sm-4"><h5>SGD {{this.total_price}}</h5></div>
      </div>
    </v-row>
    </div>
</template>
<script>
import CartCard from "@/components/CartCard.vue"
import firebaseApp from "@/firebase.js";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const db = getFirestore(firebaseApp);

export default {
    name: 'ViewPurchase',
    components:{
        CartCard
  },
  props: {
      editable: Boolean
  },
  data(){
    return {
      product_list: [],
      total_price: 0
    }
  },
  async mounted() {
    await this.getUser()
  },
  methods:{
    async getUser() {
      const auth = getAuth()
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.getProducts(user.uid)
          return user.uid
          }
        } 
      )
    },
    async getProducts(userID) {
      let cart = await getDoc(doc(db, "usershoppingcarts", userID));
      let products = cart.data().products
      for (var product_id in products) {
        let product = await getDoc(doc(db, "products", product_id))
        let product_data = product.data()
        let qty = products[product_id]
        this.total_price += qty * product_data.price
        this.product_list.push({...product_data, qty})
      }
    }
  }
}
</script>

<style scoped>
.scroll {
    width: 22rem;

  height: 30vmax;
  overflow-y: scroll;
}
.details {
    float: bottom;
}
</style>


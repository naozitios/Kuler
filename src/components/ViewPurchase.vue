<template>
<div class="scroll">
    <div
      class="col"
      v-for="product in product_list"
      :key="product.id"
    >
    <CartCard :editable = 'editable'/>
    {{product.price}}
    </div>
</div>
<div class="details">
<v-row align="left">
      <hr />
      <div class="row">
        <div class="col-sm-8"><h5>Subtotal</h5></div>
        <div class="col-sm-4"><h5>SGD XXX</h5></div>
      </div>
    </v-row>
    <hr />
    <v-row align="left">
      <div class="row">
      <div class="col-sm-8"><h4>Total</h4></div>
      <div class="col-sm-4"><h5>SGD XXX</h5></div>
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
      user: false,
      product_list: []
    }
  },
  async mounted() {
    const auth = getAuth()
    await onAuthStateChanged(auth, (user) => {
      if (user) {
        this.user = user
        }
      }
    )   
    await this.getProducts()
    
  },
  methods:{
    async getProducts() {
      console.log('test')
      let cart = await getDoc(doc(db, "usershoppingcarts", this.user.uid));
      let product_ids = cart.data().products
      console.log('test2')
      product_ids.forEach(async product_id => {
        const product = await getDoc(doc(db, "products", product_id))
        this.product_list.push(product.data())
      })
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


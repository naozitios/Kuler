<template>
  <button type="submit" value="Continue to Shipping" v-on:click="makePayment" class="btn btn-primary">
    Make Payment
  </button>
</template>

<script>
import firebaseApp from "@/firebase.js";
import { getFirestore, doc, getDoc, setDoc, Timestamp, getDocs, collection } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const db = getFirestore(firebaseApp);

export default {
  data(){
      return {
          product_list: [],
          process: false
      }
  },
  watch: {
    process(finished) {
      if (finished) {
        this.$router.push('/cartPaymentSuccess');
      }
    }
  },
  methods: {
    async makePayment() {
        const auth = getAuth()

        onAuthStateChanged(auth, async user => {
            if (user) {
                await this.getProducts(user.uid)
                await this.resetCart(user.uid)
                // return user.uid
                }
            } 
        )
        this.process = true
        this.$router.push('/cartPaymentSuccess'); 
    },
    async getProducts(userID) {
      let cart = await getDoc(doc(db, "usershoppingcarts", userID));
      let archive_data = {}
      let products = cart.data().products
      for (var product_id in products) {
          let qty = products[product_id]
          archive_data[product_id] = qty
      }
      this.archivePurchase(userID, archive_data)
    },
    async archivePurchase(userID, archive_data) {
      let size = 0
      await getDocs(collection(db, 'users', userID, "purchaseHistory")).then(docs => size = docs.size)
      let purchase_historyID = String(size + 1)
      await setDoc(doc(db, "users", userID, "purchaseHistory", purchase_historyID), {
        timestamp: Timestamp.fromDate(new Date()),
        purchases: archive_data
        }
      );
    },
    async resetCart(userID) {
      let empty_data = {}
      await setDoc(doc(db, "usershoppingcarts", userID), empty_data);
    }
  }
}
</script>

<style scoped>
.btn-primary {
  background-color: #f37381;
  border: None;
  margin: 1em;
  border-radius: 20px;
  padding: 0.5em 2em 0.5em 2em;
}

.btn-primary:hover {
  background-color: #dd6b79;
}

.btn-primary:active,
.btn-primary:focus,
.btn-primary:visited {
  background-color: #f37381;
}
</style>
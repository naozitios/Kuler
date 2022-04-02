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
          paid: false
      }
  },
  watch: {
    paid(completed) {
      if (completed) {
        this.$router.push('/cartPaymentSuccess');
      }
    }
  },
  methods: {
      async makePayment() {
          const auth = getAuth()
          onAuthStateChanged(auth, (user) => {
              if (user) {
                  console.log("before get products")
                  this.getProducts(user.uid)
                  return user.uid
                  }
              } 
          )
          this.paid = true
          // this.$router.push('/cartPaymentSuccess'); 
      },
      async getProducts(userID) {
        console.log(userID)
        let cart = await getDoc(doc(db, "usershoppingcarts", "firstPurchase"));
        let archive_data = {}
        let products = cart.data().products
        for (var product_id in products) {
            let qty = products[product_id]
            archive_data[product_id] = qty
        }
        console.log(Timestamp.fromDate(new Date()))
        console.log(userID)
        this.archivePurchase(userID, archive_data)
      },
      async archivePurchase(userID, archive_data) {
        console.log(userID)
        let size = 0
        await getDocs(collection(db, 'users', userID, "purchaseHistory")).then(docs => size = docs.size)
        console.log(size)
        let purchase_historyID = String(size + 1)
        console.log(purchase_historyID)
        await setDoc(doc(db, "users", userID, "purchaseHistory", purchase_historyID), {
          timestamp: Timestamp.fromDate(new Date()),
          purchases: archive_data
          }
        );
      },
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
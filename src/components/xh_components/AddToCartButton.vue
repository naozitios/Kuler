<template>
  <button class="btn btn-primary" type="button" @click="addToCart"><h3>Add to Cart</h3></button>
</template>

<script>
import {getAuth, onAuthStateChanged} from "firebase/auth";
import firebaseApp from '../../firebase.js';
import {getFirestore} from "firebase/firestore";
import { getDoc, doc, updateDoc, arrayUnion} from "firebase/firestore";
const db = getFirestore(firebaseApp);

export default {
  data() {
        return {
            user: false,
            productNumber: "2" // update based on which product number
        }
    },

    props: {
        quantity: Number
    },

    mounted() {
        const auth = getAuth()
        onAuthStateChanged(auth, (user) => {
            if (user) {
                this.user = user
            }
        })
    },

    methods: {
        async addToCart() {
            if (this.user) {
                
                const ref = doc(db, "usershoppingcarts", this.user.uid)
                // two cases: 
                // case 1: if not inside, we set the product and its quantity accordingly to back of array
                // case 2: if inside, find index of array, update the quantity.
                
                const document = await getDoc(ref)
                const documentData = document.data()
                var products = documentData.products
                // case 2
                // date
                var today = new Date();
                var todaysDate = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

                if (products.includes(this.productNumber)) {
                    var index = products.indexOf(this.productNumber) // index of quantity
                    var originalQuantity = documentData.quantity
                    originalQuantity[index] = originalQuantity[index] + this.quantity // prop passed down
                    var originalDate = documentData.date
                    originalDate[index] = todaysDate // replace date
                    await updateDoc((ref), {
                        date: originalDate,
                        quantity: originalQuantity
                    })
                } else { // instantiate in products + quantity + date
                    await updateDoc((ref), {
                        date: arrayUnion(todaysDate),
                        products: arrayUnion(this.productNumber),
                        quantity: arrayUnion(this.quantity)
                    })
                }
                alert("Added item to cart.") // after that, force a refresh as well
                window.location.reload(true)

            } else {
                alert("Please log in. You can only add products to your cart after you have logged in.")
                this.$router.push({name: "Login"}) 
            }
        } 
    }
}
</script>

<style scoped>
.btn.btn-primary {
    width: 100%;
  position: relative;
  display: inline-block;
  margin: 1em;
  padding: 1em 2em;
  border: 0;
  border-radius: 30px;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  font-size: 14px;
  background-color: #F37381;
}
</style>
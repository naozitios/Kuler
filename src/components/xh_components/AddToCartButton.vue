<template>
  <button class="btn btn-primary" type="button" @click="checkEntry"><h3>Add to Cart</h3></button>
</template>

<script>
import {getAuth, onAuthStateChanged} from "firebase/auth";
/*
import firebaseApp from '../../firebase.js';
import {getFirestore} from "firebase/firestore";
import { getDoc, doc, updateDoc, arrayUnion, arrayRemove} from "firebase/firestore";
const db = getFirestore(firebaseApp);*/

export default {
  data() {
        return {
            user: false,
            productNumber: "2" // update based on which product number
        }
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
        checkEntry() {
            if (this.user) {
                // add to cart
                alert("Added item to cart.") // after that, force a refresh as well

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
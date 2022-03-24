<template>
  <div class="description">
    <label for="exampleFormControlTextarea1">Product Description</label>
    <textarea class="form-control" id="productDescription" rows="6"></textarea>
  </div>
</template>

<script>
import firebaseApp from '../../firebase.js';
import {getFirestore} from "firebase/firestore";
import {doc, updateDoc} from "firebase/firestore";
const db = getFirestore(firebaseApp);


export default {
  
  props: {
    productNumber: Number
  },

  emits: ["productDescription"],

  watch: {
    productNumber: async function() {
      let z = document.getElementById('productDescription').value
      console.log(document.getElementById('productDescription').value) // debugging
      const docRef = doc(db, "products", this.productNumber)
      await updateDoc(docRef, {
        description: z
      });
    }
  },



}
</script>

<style>
.description {
      text-align: left;
      font-weight: bold;
      margin-top: 2%;
      margin-left: 2%;
}

#productDescription {
      background-color: lightgray;
      border-radius: 20px 20px 20px 20px;
}
</style>
<template>
  <button class="btn btn-primary" type="button" @click="checkEntry"><h3>Add to Cart</h3></button>
</template>

<script>
import {getAuth, onAuthStateChanged} from "firebase/auth";
export default {
  data() {
        return {
            user: false
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
                alert("Added item to cart.")
            } else {
                this.$router.push({name: "#"}) // edit!!
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
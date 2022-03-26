<template>
    <img src="@/assets/cart_icon.png" alt="Cart" @click = "checkEntry">
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
                this.$router.push({name: "CartInformation"})
            } else {
                this.$router.push({name: "Frequently Asked Questions"}) // edit!!
            }
        } 
    }
}
</script>

<style scoped>
    img{
        width:30px;
        height:auto;
        margin: 0.5em;
        cursor: pointer
    }
</style>
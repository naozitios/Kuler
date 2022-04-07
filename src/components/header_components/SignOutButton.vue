<template>
    <router-link to="/signOut"><img src="@/assets/signout_icon.png" alt="Sign Out" v-if="user"></router-link>
</template>

<script>
import {getAuth, onAuthStateChanged} from "firebase/auth";
export default {
    data() {
        return {
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
    }
}
</script>

<style scoped>
    img{
        width:30px;
        height:auto;
        /* margin: 0.5em; */
        cursor: pointer
    }
</style>
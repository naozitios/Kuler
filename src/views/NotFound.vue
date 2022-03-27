<template>
  <div style="text-align:center;" v-if="user">
      <h3>Oh no, we couldn't find what you were looking for...</h3>
      <br>
  </div>
</template>

<script>
// import NavBar from '@/components/NavBar.vue';
// import LogOut from '@/components/LogOut.vue';
import {getAuth, onAuthStateChanged} from "firebase/auth";

export default {
    name: "NotFound",
    components:{
        // NavBar
        // LogOut
    },
    data() {
        return {
            user: false,
        }
    },

    mounted() {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                this.user = user;
            }
        })
    },
}
</script>

<style>

</style>
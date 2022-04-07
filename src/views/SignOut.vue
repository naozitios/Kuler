<template>
  <button id= "btn" @click = "signOut"> Logout </button>
</template>

<script>
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth"
export default {
    name: "LogOut",

    data() {
        return {
            user: false
        }
    },

    mounted() {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                this.user = user
            }
        })
    },

    methods: {
        async signOut() {
            const auth = getAuth();
            const user = auth.currentUser;
            signOut(auth,user)
            await this.$router.push({name: 'Login'})
            this.$router.go(0)
        }
    }
}
</script>

<style>

</style>
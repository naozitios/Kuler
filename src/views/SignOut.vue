<template>
<div style="text-align:center;" v-if="user">
      <h3>We're sad to see you go... do visit us again!</h3>
      <br>
  </div>
  <button id= "btn" @click = "signOut" class="btn btn-primary" v-if="user"> Logout </button>
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
            if (!user) {
                alert("You cannot sign out if you are not logged in...")
            } else {
            signOut(auth,user)
            await this.$router.push({name: 'Login'})
            this.$router.go(0)
            }
        }
    }
}
</script>

<style scoped>
.btn-primary {
text-align: right;
background-color: #F37381;
border: None;
margin: 1em;
border-radius: 20px;
padding: 0.5em 2em 0.5em 2em;
/* float: right; */
/* margin-right: 10% */
}

.btn.btn-primary:hover {
    background-color: #dd6b79;
}

.btn.btn-primary:active, .btn-primary:focus, .btn-primary:visited {
    background-color: #F37381;
}

</style>
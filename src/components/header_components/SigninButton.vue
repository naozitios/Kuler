<template>
    <router-link to="/profile"><button type="button" class="btn btn-primary" v-if="user">Welcome, {{username}}</button></router-link>
    <router-link to="/"><button type="button" class="btn btn-primary" v-if="!user">Sign-in/Sign-up</button></router-link>

</template>

<script>
import {getAuth, onAuthStateChanged} from "firebase/auth";
export default {
    data() {
        return {
            user: false,
            username: "testuser" // get the user from the DB
        } 
    },

    mounted() {
        const auth = getAuth()
        onAuthStateChanged(auth, (user) => {
            if (user) {
                this.user = user;
                this.username = user.displayName
            }
        })
    }
}
</script>

<style scoped>
    .btn-primary {
    background-color: #EFEFEF;
    color: #636363;
    border: None;
    margin: 0.5em;
    border-radius: 20px;
    padding: 0.5em 2em 0.5em 2em;
}

.btn-primary:hover {
    background-color: #DCDCDC;
    color: #636363;
}
</style>
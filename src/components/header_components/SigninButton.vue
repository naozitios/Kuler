<template>
    <button type="button" id = "loggedIn" class="btn btn-primary" v-if="user" @click="directToProfile">Welcome, {{username}} </button>
    <router-link to="/login"><button type="button" class="btn btn-primary" v-if="!user">Sign-in/Sign-up</button></router-link>

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
                this.userID = user.uid
            }
        })
    },

    methods: {
        directToProfile() {
            const profileID = this.user.uid
            this.$router.push({name: "Profile", params: {id: profileID}})
        }
    }
}
</script>

<style scoped>
#loggedIn{
    font-size: 80%;
}
    .btn-primary {
    background-color: #EFEFEF;
    color: #636363;
    border: None;
    /* margin: 0.5em; */
    border-radius: 3vh;
    /* padding: 0.5em 2em 0.5em 2em; */
    width: 14vw;
    height: 6vh;
    /* white-space:normal !important;
    word-wrap:break-word; */
      overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* button.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
} */

.btn-primary:hover {
    background-color: #DCDCDC;
    color: #636363;
}
.btn-primary:not(:hover){
    background-color: #EFEFEF;
    color: #636363;
}

</style>
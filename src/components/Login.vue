<template>
    <div class="logo" id="logo-login">
        <img id = "logo" src="@/assets/kuler_logo_red.png" alt="Banner">
    </div>
    <div id="parentContainer" style="background-image: url('@/assets/login_banner.jpg');">
        
        <div id = "firebaseui-auth-container"></div>
        <!-- <div id= "manual-auth-container">
            <form class="form-signin">
                <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
                <label for="inputEmail" class="sr-only">Email address</label>
                <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
                <label for="inputPassword" class="sr-only">Password</label>
                <input type="password" id="inputPassword" class="form-control" placeholder="Password" required>
                <div class="checkbox mb-3">
                    <label>
                    <input type="checkbox" value="remember-me"> Remember me
                    </label>
                </div>
                <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                <p class="mt-5 mb-3 text-muted">&copy; 2022</p>
            </form>
        </div> -->
    </div>
</template>

<script>
import firebase from '@/uifire.js'
import 'firebase/compat/auth';
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'
// import KulerLogo from '@/components/header_components/KulerLogo.vue'

export default {
    name:"Login",
    components:{
    // KulerLogo
  },

    mounted() {
        var ui = firebaseui.auth.AuthUI.getInstance();
        if (!ui){
            ui = new firebaseui.auth.AuthUI(firebase.auth());
        }

        var uiConfig = {
            signInSuccessUrl: '/home',
            signInOptions: [
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                firebase.auth.EmailAuthProvider.PROVIDER_ID,
            ]
        };
        ui.start('#firebaseui-auth-container', uiConfig)
    }
}
</script>

<style scoped>
#logo{
    padding-top:10%;
    width:10%;
}
form{
    text-align: left;
}
.form-signin{
    width:50%;

}
.sr-only{
    text-align: left;
    padding-top: 2%;    
}
#firebaseui-auth-container{
    /* margin-top:50px;
    margin-bottom: 50px; */
}
#pagecontent{
    height: 100px;
    font-size: larger;
    font-weight: bolder;
    text-align: center;
}
#mainHead{
    text-align: center;
    text-shadow: 2px 2px grey;
}
#bg{
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 60%;
}
h5{
    text-align: center;
    background-color: rgb(194,202,188);
}
#firebaseui-auth-container {
    margin-top:5%;
    flex-grow: 2;
    flex-basis: 0;
}
#manual-auth-container {
    margin-top:5%;
    margin-left: 10%;
    flex-grow: 4;
    flex-basis: 0;
}
#parentContainer {
    /* background-image: url("@/assets/login_banner.jpg"); */
    display: flex;
    flex-direction: row;
    /* background-color: #F37381; */
}

</style>

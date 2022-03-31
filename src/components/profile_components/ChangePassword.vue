<template>
<div id="changePassword">
    <form>
  <div class="form-row">
      <div id="top">
          <div id="topText">
            <h5 id="main" class="left-flush"><b>Change Password</b></h5>
          </div>
          <div id = "topButton">
              <button type="button" class="btn btn-primary" @click="saveDetails"> Save password</button>

          </div>
      </div>

    <div class="form-group">
      <!-- <label for="inputEmail" >Email Address</label> -->
      <input type="password" class="form-control" id="inputCurrentPassword" placeholder="Current Password">
    </div>
    <div class="form-group">
      <!-- <label for="inputEmail" >Email Address</label> -->
      <input type="password" class="form-control" id="inputNewPassword" placeholder="New Password">
    </div>
    <div class="form-group">
      <!-- <label for="inputEmail" >Email Address</label> -->
      <input type="password" class="form-control" id="inputNewPassword2" placeholder="Confirm New Password">
    </div>
  </div>
</form>
</div>
</template>

<script>
// import firebaseApp from '../../firebase.js';
// import {getFirestore} from "firebase/firestore";
// import {doc, getDoc, updateDoc} from "firebase/firestore";
// const db = getFirestore(firebaseApp);
// import {getAuth, onAuthStateChanged, updatePassword, reauthenticateWithCredential, AuthCredential} from "firebase/auth";
import {getAuth, onAuthStateChanged, updatePassword} from "firebase/auth";
export default {
    name: 'ChangePassword',
    components:{
    },
  
    props:{
        // email:String,
        // phone:String,
        // country:String

    },
    data(){
        return {
            user: false,
            // email:"",
            // phone:"",
            // country:"",
            bio:"",
            displayName:"",
            photo:"https://i.ibb.co/RTwGc3g/user-pic2.jpg",
            newPassword:""
            
        }
    },
     emits: ["photo"],
    methods:{
        async saveDetails() {
            // const auth = getAuth();
            // this.user = auth.currentUser;
            // const credential = this.promptForCredentials();
            
            let pass1 = document.getElementById("inputNewPassword2").value
            let pass2 = document.getElementById("inputNewPassword").value
            if (pass1 != pass2) {
                alert("Passwords do not match. Please try again.")
            } else {
                this.changePass(pass2);
                // reauthenticateWithCredential(this.user, credential).then(() => {
                //     this.changePass(pass2);
                // }).catch((error) => {
                // console.error("Wrong password. Try again.", error);
                // });
                
            }
            
        },
        // promptForCredentials(){
        //     let currPass = document.getElementById("inputNewPassword").value;
        //     firebaseui.auth.AuthCredential credential1 = EmailAuthProvider.getCredential(this.user.email, currPass);
        //     var newCred = {
        //         credential: credential1,
        //         user: this.user,
        //         operationType: 'reauthenticate'
        //     }
            
        //     return newCred

        // },

        changePass(newPassword1) {
            updatePassword(this.user, newPassword1).then(() => {
            alert("Password successfully changed.")
            window.location.reload();
        }).catch((error) => {
            console.error("Error saving details, try again later ", error);
        });
        }
    },

     
    mounted(){
        const auth = getAuth()
        onAuthStateChanged(auth, (user) => {
            if (user) {
                this.user = user
                // this.prefill();
            }
         })   
      
    
    }

}
</script>

<style scoped>
#top{
    display: flex;
    flex-direction: row;
}
#topText{
    /* margin-right: 2em; */
    flex-grow: 0;
    flex-basis: 1;
}
#topButton{
    /* margin-right: 2em; */
    flex-grow: 1;
    flex-basis: 0;
}
@import url(https://fonts.googleapis.com/css?family=Open+Sans);
#main{
    color: #F37381;
}
img {
    width:75px;
    height:75px;
    border-radius:50%;
    padding-left:0%;
    /* border:4px solid #333 */
}
.left-flush{
    text-align: left;
}

/* #feedback-col {
    font-family: 'Open Sans', Verdana, Geneva, Tahoma, sans-serif;
    color: #FFFFFF;
    background-color: #FA8F9A;
    text-align: left;
    display: flow-root;
} */

.form-row {
    padding: 2em;
    text-align: left;
}
.form-group.col-md-6, .form-group {
    padding: 0.5em;

}

#learnMore1, #learnMore2 {
    color:  #3A3D3B; 
}
label{
    text-align: left;
}

/*
#inputEmail1, #inputName1, #inputFeedback1 {
    border-radius: 10px;

}*/

    .btn-primary {
    text-align: right;
    background-color: #F37381;
    border: None;
    margin-left: 5%;
    /* margin: 1em; */
    border-radius: 20px;
    padding: 0.5em 2em 0.5em 2em;
    /* float: right; */
    /* margin-right: 10% */
}

.btn-primary:hover {
    background-color: #dd6b79;
}

.btn-primary:active, .btn-primary:focus, .btn-primary:visited {
    background-color: #F37381;
}

</style>


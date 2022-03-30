<template>
<div id="public-profile">
    <form>
  <div class="form-row">
      <div id="top">
          <div id="topText">
            <h5 id="main" class="left-flush"><b>Public Profile</b></h5>
          </div>
          <div id = "topButton">
              <button type="button" class="btn btn-primary" @click="saveDetails"> Save Public Profile</button>

          </div>
      </div>

      <div class="container">
        <div class="col-sm">
        <img v-bind:src="this.photo"/>
        <input type="file" id="uploadPhoto" class="btn btn-primary" @change = "changeCoverPicture" ref = "firstFile">
        <!-- <button type="submit" class="btn btn-primary">Upload Photo</button> -->
        
        </div>
      </div>

      <!-- <h6 id="usernameTitle" class="left-flush"><b>Username</b></h6>
      <h6 id="handle" class="left-flush"><b>{{this.uid}}</b></h6>
      <small id="learnMore1" class="form-text text-muted">Your username is unique and cannot be changed. <a href="/faq"> Learn more. </a></small> -->
      <button type="submit" class="btn btn-primary">Get Authorized</button>
      <small id="learnMore2" class="form-text text-muted"><a href="/faq"> Learn more.</a></small>

    <div class="form-group">
      <label for="inputName" >Profile Name</label>
      <input type="name" class="form-control" id="inputName" placeholder="Name" v-bind:value="this.displayName">
    </div>
    <div class="form-group">
    <label for="inputBio">Bio</label>
    <textarea class="form-control" id="inputBio" rows="3" placeholder="Bio" v-bind:value="this.bio"></textarea>
  </div>
  </div>
 


  
</form>
</div>
</template>

<script>
import firebaseApp from '../../firebase.js';
import {getFirestore} from "firebase/firestore";
import {doc, getDoc, updateDoc} from "firebase/firestore";
const db = getFirestore(firebaseApp);
import {getAuth, onAuthStateChanged} from "firebase/auth";
export default {
    name: 'PrivateInformation',
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
            
        }
    },
     emits: ["photo"],
    methods:{
        changeCoverPicture() {
            let input = this.$refs.firstFile
            let file = input.files
            if (file && file[0]) {
                  let reader = new FileReader
                  reader.onload = e => {
                        this.photo = e.target.result
                        this.$emit('photo', e.target.result)
                  }
                  reader.readAsDataURL(file[0])
                  
            }
        },

        async prefill(){
            const docRef = await getDoc(doc(db, "users", this.user.uid));
            const docData = docRef.data()
            this.bio = docData.bio
            this.displayName = docData.display_name
            if (docData.photo!=null) {
                this.photo = docData.photo
            }
            // this.phone = docData.phone
            // this.country = docData.country
            // this.props.email = docData.email
            // this.props.phone = docData.phone
            // this.props.country = docData.country

            
        },
        async saveDetails() {
            // const auth = getAuth();
            // this.user = auth.currentUser;
            
            let b = document.getElementById("inputBio").value
            let d = document.getElementById("inputName").value
            let p = this.photo
            console.log(this.user.uid)
            // alert(" Saving Details: " + e)
            try{
                const ref = await doc(db, "users", this.user.uid)
                // const docSnap = await getDoc(ref)
                const newRef = await updateDoc((ref), {
                bio:b,
                display_name:d,
                photo:p
                })
                console.log(newRef)
                alert("Done")

                // document.getElementById('myform').reset();
                // this.$emit("added")
            }
            catch(error) {
                console.error("Error saving details, try again later ", error);
            }
        },
    },
    mounted(){
        const auth = getAuth()
        onAuthStateChanged(auth, (user) => {
            if (user) {
                this.user = user
                this.prefill();
            }
         })   
      
    
    }

}
</script>

<style scoped>

@import url(https://fonts.googleapis.com/css?family=Open+Sans);
#uploadPhoto{
    text-decoration: none;
}
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
#main{
    color: #F37381;
}
img {
    width:75px;
    height:75px;
    border-radius:50%;
    padding-left:0%;
    object-fit: contain;
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

}
*/
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
.container{
    padding-left: 0%;
    margin-left:0%;
}
.col-sm{
    margin-left:0%;
}

</style>


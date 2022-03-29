<template>
<div id="privateInformation">
    <form>
  <div class="form-row">
      <div id="top">
          <div id="topText">
            <h5 id="main" class="left-flush"><b>Private Information</b></h5>
          </div>
          <div id = "topButton">
              <button type="button" class="btn btn-primary" @click="saveDetails"> Save Private Information</button>

          </div>
      </div>

    <div class="form-group">
      <label for="inputEmail" >Email Address</label>
      <input type="email" class="form-control" id="inputEmail" placeholder="Email" v-bind:value="this.email">
    </div>
    <div class="form-group">
      <label for="inputPhone" >Phone Number</label>
      <input type="phone" class="form-control" id="inputPhone" placeholder="Phone" v-bind:value="this.phone">
    </div>
    <div class="form-group">
      <label for="inputCountry" >Country of Residence</label>
      <input type="country" class="form-control" id="inputCountry" placeholder="Country" v-bind:value="this.country">
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
            email:"",
            phone:"",
            country:"",
        }
    },
    methods:{
        async prefill(){
            const docRef = await getDoc(doc(db, "users", this.user.uid));
            const docData = docRef.data()
            this.email = docData.email
            this.phone = docData.phone
            this.country = docData.country
            // this.props.email = docData.email
            // this.props.phone = docData.phone
            // this.props.country = docData.country
        },
        async saveDetails() {
            // const auth = getAuth();
            // this.user = auth.currentUser;
            
            let e = document.getElementById("inputEmail").value
            let p = document.getElementById("inputPhone").value
            let c = document.getElementById("inputCountry").value
            // alert(" Saving Details: " + e)
            
                const ref = doc(db, "users", this.user.uid)
                // const docSnap = await getDoc(ref)
                const newRef = await updateDoc((ref), {
                email: e,
                phone: p,
                country: c
                })
                console.log(newRef)
                alert("Done")

                // document.getElementById('myform').reset();
                // this.$emit("added")
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


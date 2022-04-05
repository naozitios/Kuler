<template>
<div id="feedback-col">
    <form>
  <div class="form-row">
      <h5><b>Got a feedback for us? We're glad to hear it.</b></h5>
    <div class="form-group">
      <label for="inputEmail1">Email Address*</label>
      <input type="email" class="form-control" id="inputEmail1" placeholder="Email">
    </div>
    <div class="form-group">
      <label for="inputName1">Name</label>
      <input type="text" class="form-control" id="inputName1" placeholder="Name">
    </div>
    <div class="form-group">
    <label for="inputFeedback1">Feedback*</label>
    <textarea class="form-control" id="inputFeedback1" rows="3" placeholder="Write Something to us..."></textarea>
    <small id="compulsoryFields1" class="form-text text-muted">* indicates compulsory fields.</small>
  </div>
  </div>
 


  <button type="button" @click="submitSurvey" class="btn btn-primary">Submit</button>
</form>
</div>
</template>

<script>
import firebaseApp from '../../firebase.js';
import {getFirestore} from "firebase/firestore";
import {doc, setDoc, getDocs, collection} from "firebase/firestore";
const db = getFirestore(firebaseApp);
import {getAuth, onAuthStateChanged} from "firebase/auth";

export default {
    name: 'FeedbackFooter',
    components:{
    },
    data() {
      return {
        numberOfFeedbacks: null,
        user: false,
        // email:"",
        // phone:"",
        // country:"",
        email:"",
        feedback:"",
        name:""
      }
    },
    methods:{
        async findNumberOfFeedbacks() { // find the next product ID to add in. stored in numberOfProducts
            let z = await getDocs(collection(db, "survey")) 
            let count = 0
            z.forEach(() => {
            count+= 1;
            })
            this.numberOfFeedbacks = count;
            console.log(this.numberOfFeedbacks) // debug
        }, 
    async submitSurvey() {
            // const auth = getAuth();
            // this.user = auth.currentUser;
            
            let e = document.getElementById("inputEmail1").value
            let n = document.getElementById("inputName1").value
            let f = document.getElementById("inputFeedback1").value
            // console.log(this.user.uid)
            // alert(" Saving Details: " + e)
            try{
                  const docRef = await setDoc(doc(db, "survey", (this.numberOfFeedbacks + 1).toString()), {
               email:e,
                name:n,
                feedback:f
            })
            console.log(docRef)
            alert("Feedback Submitted.")
            window.location.reload();
                // const ref = await doc(db, "survey", e)
                // // const docSnap = await getDoc(ref)
                // const newRef = await setDoc((ref), {
                // email:e,
                // name:n,
                // feedback:f
                // })
                // console.log(newRef)
                // alert("Feedback Submitted.")
                // window.location.reload();

                // // document.getElementById('myform').reset();
                // // this.$emit("added")
            }
            catch(error) {
                console.error("Error saving details, try again later ", error);
            }
        },
    },
    mounted(){
        this.findNumberOfFeedbacks();
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

@import url(https://fonts.googleapis.com/css?family=Open+Sans);

#feedback-col {
    font-family: 'Open Sans', Verdana, Geneva, Tahoma, sans-serif;
    color: #FFFFFF;
    background-color: #FA8F9A;
    text-align: left;
    display: flow-root;
}

.form-row {
    padding: 2em;
}
.form-group.col-md-6, .form-group {
    padding: 0.5em;

}

#compulsoryFields1 {
    color: #FFFFFF !important; 
}


#inputEmail1, #inputName1, #inputFeedback1 {
    border-radius: 10px;

}

    .btn-primary {
    text-align: right;
    background-color: #F37381;
    border: None;
    margin: 1em;
    border-radius: 20px;
    padding: 0.5em 2em 0.5em 2em;
    float: right;
    margin-right: 10%
}

.btn-primary:hover {
    background-color: #dd6b79;
}

.btn-primary:active, .btn-primary:focus, .btn-primary:visited {
    background-color: #F37381;
}
</style>


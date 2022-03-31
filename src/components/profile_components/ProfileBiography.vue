<template>
<div id ="bigContainer">
<div class="profilePhoto">
        <!-- <div class="col-sm"> -->
        <img v-bind:src="this.photo"/>
        <!-- </div> -->
</div>
<div id="nameAndUsername">
    <h4 id="usernameTitle" class="left-flush"><b>{{this.displayName}}</b></h4>
    <!-- <h6 id="handle" class="left-flush">@jessieeggie</h6> -->
</div>
<div id="rating">
    <div id="ratingTextNumber">
    <h6 id="ratingText">{{this.rating}}</h6>
    </div>
    <div id="ratingStars">
    <StarRatingContinuous :rating = "rating"/>
    </div>
     
</div>
<div id="authorizedStatus">
    <div id="authorizedIcon">
    <img class="smallIcon" src="@/assets/authorized_icon.png" alt="Authorized Seller">
    </div>
    <div id="authorizedText">
    <h6 id="authorized" class="left-flush"><b>Authorized Seller</b></h6>
    </div>
    
    
    
</div>
<div id="button">
    <router-link to="/profileEdit"><button type="submit" class="btn btn-primary">Edit Profile</button></router-link>
</div>
<div id="bioText" class="left-flush">
    <h6>{{this.bio}} </h6>
</div>
<br/>

</div>
</template>

<script>
import StarRatingContinuous from '@/components/xh_components/StarRatingContinuous.vue'
import firebaseApp from '../../firebase.js';
import {getFirestore} from "firebase/firestore";
import {doc, getDoc, getDocs, collection} from "firebase/firestore";
const db = getFirestore(firebaseApp);
import {getAuth, onAuthStateChanged} from "firebase/auth";
export default {
    name: 'ProfileBiography',
  components:{
    StarRatingContinuous
  },
  data(){
        return {
            user: false,
            // email:"",
            // phone:"",
            // country:"",
            bio:"",
            displayName:"",
            photo:"https://i.ibb.co/RTwGc3g/user-pic2.jpg"
        }
    },
    methods:{
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
            //rating details
          // need to pull out from product ratings for all of SELLER's products, then aggregate it
          const sellerRatings = await getDocs(collection(db, "productratings"))
          sellerRatings.forEach((doc) => {
              const dataRef = doc.data()
              if (dataRef.user_id_seller === this.sellerID) { // only pull out product ratings belonging to
                const starArray = dataRef.num_stars
                this.numberOfReviews += dataRef.reviews
                for (var i = 0; i < starArray.length; i++) {
                    this.totalRating += starArray[i]
                }
              }
          })
          this.rating = (this.totalRating / this.numberOfReviews)

        }
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
#bigContainer{
    display: flex;
    flex-direction: column;
}
#authorized{
    color: #F37381;
}
.smallIcon{
    float:left;
    height: 20px;
    width: auto;
    margin-right: 0%;
    padding-right: 0%;

}
#ratingText{
    text-align: right;
}
#rating{
    display: flex;
    flex-direction: row;
    justify-content: center;
}
#ratingTextNumber{
    flex-grow: 0;
    /* padding: 2em; */
    flex-basis: 1;
    /* padding-left:45%; */
    justify-content: center;
  align-content: center;
}
#ratingStars{
    flex-grow: 0;
    /* align-content: flex-start; */
    justify-content: center;
    padding: 0em 0em 0em 0.5em;
    flex-basis: 3;
}
#authorizedIcon{
    flex-grow: 0;
    /* padding: 2em; */
    flex-basis: 2;
    padding-left:45%;
    justify-content: center;
    /* justify-content: center;
  align-content: center; */
}
#authorizedText{
    flex-grow: 0;
    /* align-content: flex-start; */
    justify-content: center;
    padding: 0em 0em 0em 0.5em;
    flex-basis: 4;
}
#authorized{
    text-align: left;
}
#main{
    color: #F37381;
}
/* #handle{
    color:#3A3D3B; 

} */
img {
    width:75px;
    height:75px;
    border-radius:50%;
    padding-left:0%;
    
    object-fit: contain;
    
    /* border:4px solid #333 */
}
#bioText{
    text-align: center;
    padding-left:0.5em;
    justify-content: center;
}


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
#button{
    justify-content: center;
}

</style>


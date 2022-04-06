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
<div id="authorizedStatus" v-if="this.authorised">
    <div id="authorizedIcon">
    <img class="smallIcon" src="@/assets/authorized_icon.png" alt="Authorized Seller">
    </div>
    <div id="authorizedText">
    <h6 id="authorized" class="left-flush"><b>Authorized Seller</b></h6>
    </div>
</div>
<div id="notAuthorizedStatus" v-else>
    <div id="notAuthorizedIcon">
    <img class="smallIcon" src="@/assets/not_authorized_icon.png" alt="Authorized Seller">
    </div>
    <div id="notAuthorizedText">
    <h6 id="notAuthorized" class="left-flush"><b>Not authorized</b></h6>
    </div>
</div>
<div id="button">
   <button type="submit" class="btn btn-primary" v-if="this.isOwner" @click="editProfile">Edit Profile</button>
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
  props: {
      profileID: String
  },
  data(){
        return {
            user: false,
            // email:"",
            // phone:"",
            // country:"",
            bio:"",
            displayName:"",
            totalRating: 0,
            numberOfReviews: 0,
            rating: 0,
            photo:"https://i.ibb.co/RTwGc3g/user-pic2.jpg",
            authorised: false,
            isOwner: null
        }
    },
    methods:{
        async prefill(){
            const docRef = await getDoc(doc(db, "users", this.profileID));
            const docData = docRef.data()
            this.bio = docData.bio
            this.displayName = docData.display_name
            this.authorised = docData.authorised
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
              if (dataRef.user_id_seller === this.profileID) { // only pull out product ratings belonging to the person
                const starArray = dataRef.num_stars
                this.numberOfReviews += dataRef.reviews
                for (var i = 0; i < starArray.length; i++) {
                    this.totalRating += starArray[i]
                }
              }
          })
          if (this.numberOfReviews == 0) {
              this.rating = 0
          } else {
              this.rating = Number((this.totalRating / this.numberOfReviews).toFixed(2))
          }
          

        },

        checkOwner() {
            if (this.profileID === this.user.uid) {
                this.isOwner = true;
            } else {
                this.isOwner = false;
            }
        },

        editProfile() {
            const profileID = this.profileID
            this.$router.push({name: "Edit Profile", params: {id: profileID}})
        }
    },
    mounted(){
        const auth = getAuth()
        onAuthStateChanged(auth, (user) => {
            if (user) {
                this.user = user
                this.prefill()
                .then(() => {this.checkOwner()})
                
            }
         })
        if (!this.user) {
            this.prefill()
            this.isOwner = false;
        }
      
    
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
#notAuthorized{
    color: grey;
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
    /* flex-direction: row; */
    justify-content: center;
    text-align: center;
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
    text-align: center;
    padding: 0em 0em 0em 0.5em;
    flex-basis: 3;
}
#authorizedIcon, #notAuthorizedIcon{
    flex-grow: 0;
    /* padding: 2em; */
    flex-basis: 2;
    padding-left:45%;
    justify-content: center;
    /* justify-content: center;
  align-content: center; */
}
#authorizedText, #notAuthorizedText{
    flex-grow: 0;
    /* align-content: flex-start; */
    justify-content: center;
    padding: 0em 0em 0em 0.5em;
    flex-basis: 4;
}
#authorized, #notAuthorized{
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


<template>
  <div class="float-container">
  <div class= "first-child">  
  <ProductScroll :productID = "productNumber"/>
  </div>
  <div class = "second-child">
    <ProductInformation :productID = "productNumber"/>
    </div>
  </div>
<Reviews/>
<SimilarItems/>
<FooterMain/>
</template>

<script>
import ProductScroll from '@/components/xh_components/ProductScroll.vue';
import SimilarItems from '@/components/SimilarItems.vue';
import ProductInformation from '@/components/xh_components/ProductInformation.vue';
import Reviews from '@/components/Reviews.vue';
import FooterMain from '@/components/footer_components/FooterMain.vue'
import firebaseApp from '../firebase.js';
import {getFirestore} from "firebase/firestore";
const db = getFirestore(firebaseApp);
import {getDoc, doc, setDoc} from "firebase/firestore";
import {getAuth, onAuthStateChanged} from "firebase/auth";

export default {
  name: 'App',
  components:{
    ProductScroll,
    ProductInformation,
    SimilarItems,
    Reviews,
    FooterMain
  },
  data(){
    return {
      user: false,
      productNumber: (this.$route.params.id).toString()
    }
  },


  methods:{
    async checkIfUserInDatabase() { // issue is, only will be instantiated if user is accessed.
    // instantiate user
      const ref = await doc(db, "users", this.user.uid)
      const docSnap = await getDoc(ref)
      if (!docSnap.exists()) {
        const newRef = await setDoc((ref), {
          email: this.user.email,
          display_name: this.user.displayName,
          photo: this.user.photoURL,
          phone: "",
          country: "",
          bio: ""
        })
        console.log(newRef)
      }
    // instantiate user favourites
      const favouritesRef = await doc(db, "userfavourites", this.user.uid)
      const favouriteDocSnap = await getDoc(favouritesRef)
      if (!favouriteDocSnap.exists()) {
        const newRef = await setDoc((favouritesRef), {
          date: [],
          products: []
        })
        console.log(newRef)
      }

      // instantiating user listings
      const listingsRef = await doc(db, "userlistings", this.user.uid)
      const listingsDocSnap = await getDoc(listingsRef)
      if (!listingsDocSnap.exists()) {
        const newRef = await setDoc((listingsRef), {
          date: [],
          products: []
        })
        console.log(newRef)
      }

      // instantiating user listings

      const purchasesRef = await doc(db, "userpurchases", this.user.uid)
      const purchasesDocSnap = await getDoc(purchasesRef)
      if (!purchasesDocSnap.exists()) {
        const newRef = await setDoc((purchasesRef), {
          date: [],
          products: []
        })
        console.log(newRef)
      }

      const cartsRef = await doc(db, "usershoppingcarts", this.user.uid)
      const cartsDocSnap = await getDoc(cartsRef)
      if (!cartsDocSnap.exists()) {
        const newRef = await setDoc((cartsRef), {
          date: [],
          products: [],
          quantity: []
        })
        console.log(newRef)
      }
    }
  },

  mounted() {
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
       if (user) {
          this.user = user
          //this.checkIfUserInDatabase()
       }
    })         
  }
}
</script>


<style scoped>
    @import url(https://fonts.googleapis.com/css?family=Open+Sans);
    #app {
        font-family: 'Open Sans', Verdana, Geneva, Tahoma, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    .float-container {
      display: flex;
      margin-left: 20px
    }
    .first-child {
      margin-top: 2%;
      width: 65%
    }

    .second-child {
      margin-top: 2%;
      width: 35%;
    }
    /* #bg{
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 60%;
    } */
</style>
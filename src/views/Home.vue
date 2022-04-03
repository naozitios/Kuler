<template>
    <HomeBanner/>
    <TopPicksSection/>
    <PopularSection/>
    <FooterMain/>
    <!-- <StarRating/> -->
</template>

<script>
import HomeBanner from '@/components/HomeBanner.vue'
import TopPicksSection from '@/components/TopPicksSection.vue'
import PopularSection from '@/components/PopularSection.vue'
import FooterMain from '@/components/footer_components/FooterMain.vue'
import firebaseApp from '../firebase.js';
import {getFirestore} from "firebase/firestore";
const db = getFirestore(firebaseApp);
import {getDoc, doc, setDoc} from "firebase/firestore";
import {getAuth, onAuthStateChanged} from "firebase/auth";

export default {
  name: 'Home',
  components:{
    HomeBanner,
    FooterMain,
    TopPicksSection,
    PopularSection
  },
  data(){
    return {
      user: false,
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
          bio: "",
          authorised: false
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
          quantity: [],
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
          this.checkIfUserInDatabase()
       }
    })     
  }
}
</script>

<style>
    @import url(https://fonts.googleapis.com/css?family=Open+Sans);
    /* #app {
        font-family: 'Open Sans', Verdana, Geneva, Tahoma, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    } */
    /* #bg{
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 60%;
    } */
</style>

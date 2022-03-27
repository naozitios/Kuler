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
      userEmail: null
    }
  },
  methods:{
    async checkIfUserInDatabase() {
      const ref = await doc(db, "users", this.userEmail)
      const docSnap = await getDoc(ref)
      if (!docSnap.exists()) {
        const newRef = await setDoc((ref), {
          email: this.userEmail
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
          this.userEmail = user.email
          this.checkIfUserInDatabase(this.user)
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

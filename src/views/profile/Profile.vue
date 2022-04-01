<template>
<div class="fullWidth" id="banner">
<ProfileBanner/>
</div>
<div class="fullWidth" id="navBar">
<h6> <ProfileNavBar :isVisible="isVisible" :profileID="profileUserID"/></h6>
</div>
<div>
  <!-- <SortByButton /> -->
  <ProfileBiography :profileID="profileUserID"/>
</div>
  <div class="col-md-4 offset-md-8">
  <SortByButton />
  <!-- <ProfileBiography/> -->
  </div>
  <div class = "listings">
      <FilterOptions/>
      <Listings :category="category" :profileID ="profileUserID"/>
  </div>

<!-- <SortByButton/> -->
<!-- <div class="parent" id="parentContainer">
  <div id="bio">
    <ProfileBiography/>
    </div>
    <div class="col-md-4 offset-md-8"><SortByButton /></div>
  <div id="content">
    <div class = "listings">
      <FilterOptions/>
      <Listings :category="category"/>
  </div>
  </div>
</div> -->
<!-- <div class="parent" id="parentContainer2">
  <FilterOptions/>
</div> -->
</template>

<script>
import ProfileBanner from '@/components/profile_components/ProfileBanner.vue';
import ProfileBiography from '@/components/profile_components/ProfileBiography.vue';
import ProfileNavBar from '@/components/profile_components/ProfileNavBar.vue';
import Listings from '@/components/Listings.vue'
import FilterOptions from '@/components/FilterOptions.vue'
import SortByButton from '@/components/SortByButton.vue'
import {getAuth, onAuthStateChanged} from "firebase/auth";

export default {
  name: 'App',
  components:{
    ProfileBanner,
    ProfileBiography,
    ProfileNavBar,
    Listings,
    FilterOptions,
    SortByButton

  },
  data(){
    return {
      category: 0,
      rating: 0,
      currentUser: null,
      profileUserID: this.$route.params.id,
      isVisible: null
     }
  },
  methods:{
   
  },

  mounted() {
      const auth = getAuth()
        onAuthStateChanged(auth, (user) => {
            if (user) {
                this.currentUser = user
                if (this.profileUserID === this.currentUser.uid) { // if current user = profile being seen, can see!
                  this.isVisible = true
                } else {
                  this.isVisible = false
                }
                // console.log(this.profileUserID) the magic pill to unlock
            }
        })
      
  }
}
</script>


<style scoped>
#banner{
  height:50%;
  overflow: hidden;
}
#parentContainer{
  display: flex;
  flex-direction: row;
}
#parentContainer2{
  padding-left: 5%;
}
#bio{
  flex-grow: 2;
    padding-left: 5%;
    flex-basis: 0;
}
#content{
  flex-grow: 10;
    padding-left: 0%;
    flex-basis: 0;
}
    
</style>
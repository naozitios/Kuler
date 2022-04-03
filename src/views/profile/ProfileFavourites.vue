<template>

<div class="fullWidth" id="banner">
<ProfileBanner/>
</div>
<div class="fullWidth" id="navBar">
<h6> <ProfileNavBar :isVisible="isVisible" :profileID="profileUserID"/></h6>
</div>
<div id="contentTitle">
    <div id="warningIcon">
        <img class="smallIcon" src="@/assets/hidden_from_view.png" alt="Hidden from view">
    </div>

    <div id="warningTitle">
        <h6><b>Your favourited items are hidden from public view</b></h6>
    </div>
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
      <FilterProfile @changeCategory="changeCategory($event)" @changeFormat="changeFormat($event)"/>
      <Listings :category="category" :format="format" :userFavID="profileUserID" :key="componentKey"/>
  </div>
</template>

<script>
import ProfileBanner from '@/components/profile_components/ProfileBanner.vue';
import ProfileBiography from '@/components/profile_components/ProfileBiography.vue';
import ProfileNavBar from '@/components/profile_components/ProfileNavBar.vue';
import Listings from '@/components/Listings.vue'
import SortByButton from '@/components/SortByButton.vue'
import FilterProfile from '@/components/profile_components/FilterProfile.vue'
import {getAuth, onAuthStateChanged} from "firebase/auth";


export default {
  name: 'App',
  components:{
    ProfileBanner,
    ProfileBiography,
    ProfileNavBar,
    Listings,
    SortByButton,
    FilterProfile

  },
  data(){
    return {
      category: 0,
      format: "All",
      currentUser: null,
      profileUserID: this.$route.params.id,
      isVisible: null,
      componentKey: 0
     }
    
  },
  methods:{
   changeCategory(category) {
      this.category = category
      this.componentKey += 1
   },
   changeFormat(format) {
     this.format = format
     this.componentKey += 1
   }
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
#parentContainer, #contentTitle{
  display: flex;
    flex-direction: row;
}
#bio{
  flex-grow: 1;
    padding: 2em;
    flex-basis: 0;
}
#content{
  flex-grow: 4;
    padding: 2em;
    flex-basis: 0;
}
#warningTitle{
    flex-grow: 4;
    /* padding: 2em; */
    flex-basis: 0;
    color: #F37381;
    text-align: left;
    font-weight: 900;
}
#warningIcon{
    flex-grow: 0;
    padding: 0 1% 0 35%;
    flex-basis: 1;
}
    
</style>
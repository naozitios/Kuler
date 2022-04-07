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
  <SortByButton @sortByOldest = "oldestSort" @sortByPrice = "priceSort" @sortByRelavancy = "relevanceSort" @sortByNewest = "newestSort" @sortByRating="ratingSort" />
  <!-- <ProfileBiography/> -->
  </div>
  <div class = "listings">
      <FilterProfile @changeCategory="changeCategory($event)" @changeFormat="changeFormat($event)"/>
      <Listings :category="category" :profileID ="profileUserID" :key="componentKey" :format="format" :sort="sort"/>
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
import FilterProfile from '@/components/profile_components/FilterProfile.vue'
import SortByButton from '@/components/SortByButton.vue'
import {getAuth, onAuthStateChanged} from "firebase/auth";

export default {
  name: 'App',
  components:{
    ProfileBanner,
    ProfileBiography,
    ProfileNavBar,
    Listings,
    FilterProfile,
    SortByButton

  },
  data(){
    return {
      category: 0,
      format: "All",
      rating: 0,
      currentUser: null,
      profileUserID: this.$route.params.id,
      isVisible: null,
      sort: 0,
      componentKey: 0, // force it to re-render
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
   },
   oldestSort() {
      this.sort = 2
      this.componentKey += 1
    }, 
    priceSort() {
      this.sort = 1
      this.componentKey += 1
    },
    relevanceSort() {
      this.sort = 0
      this.componentKey += 1
    },
    newestSort() {
      this.sort = 3
      this.componentKey += 1
    },
    ratingSort() {
      this.sort = 4
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
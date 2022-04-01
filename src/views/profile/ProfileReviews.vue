<template>
<div class="fullWidth" id="banner">
<ProfileBanner/>
</div>
<div class="fullWidth" id="navBar">
<h6> <ProfileNavBar :isVisible="isVisible" :profileID="profileUserID"/></h6>
</div>
<div>
  <!-- <SortByButton /> -->
  <ProfileBiography/>
</div>
<div class="parent" id="parentContainer">

    <div id="content">
        <UserReview/>
    </div>
</div>
</template>

<script>
import ProfileBanner from '@/components/profile_components/ProfileBanner.vue';
import ProfileBiography from '@/components/profile_components/ProfileBiography.vue';
import ProfileNavBar from '@/components/profile_components/ProfileNavBar.vue';
import UserReview from '@/components/profile_components/UserReview.vue';
import {getAuth, onAuthStateChanged} from "firebase/auth";


export default {
components:{
    ProfileBanner,
    ProfileBiography,
    ProfileNavBar,
    UserReview,
  },

  data() {
    return {
      currentUser: null,
      profileUserID: this.$route.params.id,
      isVisible: null
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
#parentContainer{
  display: flex;
    flex-direction: row;
}
#parentContainer2{
  padding-left: 2em;
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
</style>
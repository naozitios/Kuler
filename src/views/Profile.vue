<template>
<div class="fullWidth" id="banner">
<ProfileBanner/>
</div>
<div class="fullWidth" id="navBar">
<h6> <ProfileNavBar/></h6>
</div>
<div class="parent" id="parentContainer">
  <div id="bio">
    <ProfileBiography/>
    </div>
  <div id="content">
    <Listings/>
  </div>
</div>
</template>

<script>
import ProfileBanner from '@/components/profile_components/ProfileBanner.vue';
import ProfileBiography from '@/components/profile_components/ProfileBiography.vue';
import ProfileNavBar from '@/components/profile_components/ProfileNavBar.vue';
import Listings from '@/components/Listings.vue'

export default {
  name: 'App',
  components:{
    ProfileBanner,
    ProfileBiography,
    ProfileNavBar,
    Listings

  },
  data(){
    
  },
  methods:{
   
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
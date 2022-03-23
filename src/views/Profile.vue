<template>
<div class="fullWidth" id="banner">
<ProfileBanner/>
</div>
<div class="fullWidth" id="navBar">
<h6> <ProfileNavBar/></h6>
</div>
<div class="parent" id="parentContainer">
  <div id="bio">
    <ProfileBiography/></div>
  <div id="content"></div>
</div>
</template>

<script>
import ProfileBanner from '@/components/profile_components/ProfileBanner.vue';
import ProfileBiography from '@/components/profile_components/ProfileBiography.vue';
import ProfileNavBar from '@/components/profile_components/ProfileNavBar.vue';

export default {
  name: 'App',
  components:{
    ProfileBanner,
    ProfileBiography,
    ProfileNavBar
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
    
</style>
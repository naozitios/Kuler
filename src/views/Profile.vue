<template>
<div class="fullWidth" id="banner">
<ProfileBanner/>
</div>
<div class="fullWidth" id="navBar">
<h6> Nav Bar goes here</h6>
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

export default {
  name: 'App',
  components:{
    ProfileBanner,
    ProfileBiography
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
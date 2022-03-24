<template>
<div class="fullWidth" id="banner">
<ProfileBanner/>
</div>
<div class="fullWidth" id="navBar">
<h6> <ProfileNavBar/></h6>
</div>
<div id="contentTitle">
        <div id="warningIcon">
            <img class="smallIcon" src="@/assets/hidden_from_view.png" alt="Hidden from view">
        </div>
    
        <div id="warningTitle">
            <h6><b>Your favourited items are hidden from public view</b></h6>
        </div>
</div>
<SortByButton/>
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
import SortByButton from '@/components/SortByButton.vue'

export default {
  name: 'App',
  components:{
    ProfileBanner,
    ProfileBiography,
    ProfileNavBar,
    Listings,
    SortByButton

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
    padding: 0 1% 0 25%;
    flex-basis: 1;
}
    
</style>
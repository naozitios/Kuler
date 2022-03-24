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
        <UserReview/>
    </div>
</div>
</template>

<script>
import ProfileBanner from '@/components/profile_components/ProfileBanner.vue';
import ProfileBiography from '@/components/profile_components/ProfileBiography.vue';
import ProfileNavBar from '@/components/profile_components/ProfileNavBar.vue';
import UserReview from '@/components/profile_components/UserReview.vue';

export default {
components:{
    ProfileBanner,
    ProfileBiography,
    ProfileNavBar,
    UserReview,
  },
}
</script>

<style scoped>
#banner{
  height:30%;
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
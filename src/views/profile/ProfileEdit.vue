<template>
<div id="topContainer">
  <div id="button">
      <router-link to="/profile"><button type="submit" class="btn btn-primary"> &larr; Back</button></router-link>
  </div>
  <div id="title"><h2> Edit Profile </h2></div>

  
</div>
<PublicProfile/>
<PrivateInformation/>
<ChangePassword/>
</template>

<script>
import PublicProfile from '@/components/profile_components/PublicProfile.vue';
import PrivateInformation from '@/components/profile_components/PrivateInformation.vue';
import ChangePassword from '@/components/profile_components/ChangePassword.vue';

export default {
  name: 'App',
  components:{
    PublicProfile,
    PrivateInformation,
    ChangePassword
  },
  data(){
    
  },
  methods:{
   
  }
}
</script>


<style scoped>
#topContainer{
      display: flex;
    flex-direction: row;
}
#title{
   margin-top:2%;
    margin-left: 5%;
    flex-grow: 0;
    flex-basis: 4;

/* display: inline; */

}
#button{
   margin-top:2%;
    margin-left: 5%;
    flex-grow: 0;
    flex-basis: 1;
}
.btn-primary {
text-align: right;
background-color: #F37381;
border: None;
/* margin: 1em; */
border-radius: 20px;
padding: 0.5em 2em 0.5em 2em;
/* float: left;
display: inline-block; */
/* margin-right: 10% */
}

.btn.btn-primary:hover {
    background-color: #dd6b79;
}

.btn.btn-primary:active, .btn-primary:focus, .btn-primary:visited {
    background-color: #F37381;
}
    
</style>
<template>
<h2> Edit Profile </h2>
<div id="button">
    <router-link to="/profile"><button type="submit" class="btn btn-primary">Back</button></router-link>
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
.btn-primary {
text-align: right;
background-color: #F37381;
border: None;
/* margin: 1em; */
border-radius: 20px;
padding: 0.5em 2em 0.5em 2em;
/* float: right; */
/* margin-right: 10% */
}

.btn.btn-primary:hover {
    background-color: #dd6b79;
}

.btn.btn-primary:active, .btn-primary:focus, .btn-primary:visited {
    background-color: #F37381;
}
    
</style>
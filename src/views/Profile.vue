<template>
  
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


<style>
    
</style>
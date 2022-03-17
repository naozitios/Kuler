<template>
  
<PublicProfile/>
<PrivateInformation/>
<ChangePassword/>
</template>

<script>

import PublicProfile from '@/components/PublicProfile.vue';
import PrivateInformation from '@/components/PrivateInformation.vue';
import ChangePassword from '@/components/ChangePassword.vue';

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
<template>
    <div class='row'>
        <h1> Order Details </h3>
        <h3> Information > Shipping > Payment </h3>
    </div>
        <div class='row'>
            <h1> Name </h1>
            <input type="text" class="Name" placeholder="Enter Name">
    </div>
            <div class='row'>
            <h1> Email Address </h1>
            <input type="text" class="EmailAddress" placeholder="Enter Email">
    </div>
    <ContinueToPaymentButton />
</template>

<script>
import ContinueToPaymentButton from '@/components/ContinueToPaymentButton.vue'

export default {
    name: 'OrderDetails',
  components:{
    ContinueToPaymentButton,
  },
  data(){
    
  },
  methods:{
   
  }


}
</script>

<style scoped>

</style>
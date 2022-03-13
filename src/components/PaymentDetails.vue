<template>
    <div class='row'>
        <h1> Order Details </h3>
        <h3> Information > Shipping > Payment </h3>
    </div>
        <div class='row'>
            <h1> Card Details </h1>
            <input type="text" class="CardNumber" placeholder="Card Number">
        </div>
            <div class='row'>
            <h1> Name on card </h1>
            <input type="text" class="CardName" placeholder="Name">
          </div>

            <div class='row'>
            <h1> CVV </h1>
            <input type="text" class="CVV" placeholder="CVV">
    </div>
            <div class='row'>
            <h1> Email Address </h1>
            <input type="text" class="EmailAddress" placeholder="Enter Email">
    </div>
    <PayButton />
</template>

<script>
import PayButton from '@/components/PayButton.vue'

export default {
    name: 'OrderDetails',
  components:{
    PayButton,
  },
  data(){
    
  },
  methods:{
   
  }


}
</script>

<style scoped>

</style>
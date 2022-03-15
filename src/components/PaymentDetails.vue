<template>
    <div class='row'>
      <h1>Payment Details</h1>
      <p>
        <span id="information">Information</span> > 
        <span id="shipping">Shipping</span> > 
        <span id="payment">Payment</span>
      </p>
    </div>
    <form action="/CartPayment">
      <label for="cardDetails">Card Details: </label><br>
      <input type="text" id="address" name="address" placeholder="Card Number"><br>

      <label for="nameOnCard">Name on Card: </label><br>
      <input id="nameOnCard" type="text" name="nameOnCard"><br>

      <label for="cvv">CVV: </label><br>
      <input id="cvv" type="text" name="cvv"><br>
      <input type="submit" value="Make Payment">
    </form>
    <button onclick="history.back()">Back</button>
</template>

<script>

export default {
    name: 'OrderDetails',
  data(){
    
  },
  methods:{
   
  }


}
</script>

<style scoped>
p {
  font-weight: bold;
}
#information, #shipping,#payment {
  color: red;
  font-weight: bold;
}
</style>
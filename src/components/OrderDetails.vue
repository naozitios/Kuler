<template>
  <div class='row'>
      <h1>Order Details</h1>
      <p>
        <span id="information">Information</span> > 
        <span id="shipping">Shipping</span> > 
        <span id="payment">Payment</span>
      </p>
  </div>
  <form action="/CartShipping" method="GET">
    <label for="name">Name: </label><br>
    <input type="text" id="name" name="name"><br>
    <label for="email>">Email Address: </label><br>
    <input type="text" id="email" name="email"><br>
    <input type="submit" value="Continue to Shipping">
  </form>
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
#shipping, #payment {
  color: rgb(206, 204, 204);
  font-weight: normal;
}
#information {
  color: red;
  font-weight: bold;
}
</style>
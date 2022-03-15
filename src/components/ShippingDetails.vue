<template>
  <div class='row'>
      <h1>Shipping Details</h1>
      <p>
        <span id="information">Information</span> > 
        <span id="shipping">Shipping</span> > 
        <span id="payment">Payment</span>
      </p>
  </div>
  <form action="/CartPayment">
    <label for="address">Shipping Address (Physical items only): </label><br>
    <input type="text" id="address" name="address"><br>

    <label for="deliveryOptions">Delivery Options: </label><br>
        <select name="slct" id="slct">
            <option value="1">Normal delivery</option>
            <option value="2">Express delivery</option>
            <option value="3">On-site collection</option>
        </select><br>
    
    <label for="email">Email (Digital items only): </label><br>
    <input id="email" type="text" name="email"><br>

    <input type="submit" value="Continue to Payment">
  </form>
      <button onclick="history.back()">Back</button>
</template>

<script>
export default {
}
</script>
<style scoped>
p {
  font-weight: bold;
}
#payment {
  color: rgb(206, 204, 204);
  font-weight: normal;
}
#information, #shipping {
  color: red;
  font-weight: bold;
}
</style>
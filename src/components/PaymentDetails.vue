<template>
  <div class="row">
    <h1>Payment Details</h1>
    <p>
      <span id="information">Information</span> >
      <span id="shipping">Shipping</span> >
      <span id="payment">Payment</span>
    </p>
  </div>
  <form id="form" @submit.prevent="pushData" method="GET">
    <!-- <div class="col-3"> -->
      <div class="formFill">
      <label for="cardDetails">Card Details: </label><br />
    </div>
    <!-- <div class="d-flex justify-content-center"> -->
      <div class="formFill">
      <div class="form-group col-md-9">
        <input
          type="text"
          id="name"
          name="address"
          placeholder="Card Number"
        /><br />
      </div>
    </div>
    <br />
    <!-- <div class="col-3"> -->
      <div class="formFill">
      <label for="nameOnCard">Name on Card: </label><br />
    </div>
    <!-- <div class="d-flex justify-content-center"> -->
      <div class="formFill">
      <div class="form-group col-md-9">
        <input id="name" type="text" name="nameOnCard" /><br />
      </div>
    </div>
    <br />
    <!-- <div class="col-3"> -->
      <div class="formFill">
      <label for="cvv">CVV: </label><br /></div>
    <!-- <div class="d-flex justify-content-center"> -->
      <div class="formFill">
      <div class="form-group col-md-9">
        <input id="name" type="text" name="cvv" /><br />
      </div>
    </div>
    <PayButton :data = data /> <br/>
    </form>
  <button onclick="history.back()" class="btn-primary">Back</button>
  
</template>

<script>
import PayButton from "@/components/PayButton.vue";

export default {
  name: "PaymentDetails",
  components: {
    PayButton,
  },
  props: {
    data: Object
  }
};
</script>

<style scoped>
.formFill{
  text-align: left;
  padding-left:10%;
}
p {
  font-weight: bold;
}
#information,
#shipping,
#payment {
  color: red;
  font-weight: bold;
}
#name {
  width: 100%;
  background-color: #efefef;
  border: 3px solid #efefef;
  /* border: none; */
  border-right: none;
  padding: 5px;
  height: 40px;
  border-radius: 20px 20px 20px 20px;
  outline: none;
  color: #3a3d3b;
  font-family: "Open Sans", Verdana, Geneva, Tahoma, sans-serif;
}
.btn-primary {
  background-color: #f37381;
  border: None;
  margin: 1em;
  border-radius: 20px;
  padding: 0.5em 2em 0.5em 2em;
}

.btn-primary:hover {
  background-color: #dd6b79;
}

.btn-primary:active,
.btn-primary:focus,
.btn-primary:visited {
  background-color: #f37381;
}
</style>
<template>
  <div class="row">
    <h1>Shipping Details</h1>
    <p>
      <span id="information">Information</span> >
      <span id="shipping">Shipping</span> >
      <span id="payment">Payment</span>
    </p>
  </div>

  <form id="form" @submit.prevent="pushData" method="GET">
    <!-- <div class="col-3"> -->
      <div class="formFill">
      <label for="address">Shipping Address (Physical items only): </label
      ><br />
    </div>
    <!-- <div class="d-flex justify-content-center"> -->
      <!-- <div class="formFill"> -->
        <div class="formFill">
      <div class="form-group col-md-9">
        <input type="text" id="name" v-model="address" name="name" /><br />
      </div>
    </div>
    <br />
    <!-- <div class="col-3"> -->
      <div class="formFill">
      <label for="email">Email (Digital items only): </label><br />
    </div>
    <!-- <div class="d-flex justify-content-center"> -->
      <div class="formFill">
      <div class="form-group col-md-9">
        <input id="name" type="text" v-model="RecepientEmail" name="RecepientEmail" /><br />
      </div>
    </div>
    <br>
    <!-- <div class="col-3"> -->
      <div class="formFill">
      <label for="deliveryOptions">Delivery Options: </label><br />
    </div>
    <!-- <div class="d-flex justify-content-center"> -->
      <div class="formFill">
      <div class="form-group col-md-9">
        <select class="form-select" v-model="deliveryType" aria-label="Default select example">
          <option disabled value="">Please select</option>
          <option value="1">Normal delivery</option>
          <option value="2">Express delivery</option>
          <option value="3">On-site collection</option></select>
      </div>
    </div>
    <button type="submit" value="Continue to Payment"  class="btn btn-primary">Continue to payment</button>
  </form>
  <button onclick="history.back()" class="btn-primary">Back</button>
</template>

<script>

export default {
  name: "ShippingDetails",
  components: {
  },
  props: {
    name: String,
    email: String
  },
  data() {
    return {
      RecepientEmail: this.email,
      address: "",
      deliveryType: 0
    }
  },
  methods: {
    async pushData() {
      let updated_data = {
        name: this.name,
        email: this.email,
        address: this.address,
        deliveryType: this.deliveryType,
        RecepientEmail: this.RecepientEmail
      }
      this.$router.push({name: 'CartPayment', query: updated_data})
    }
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
#payment {
  color: rgb(206, 204, 204);
  font-weight: normal;
}
#information,
#shipping {
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
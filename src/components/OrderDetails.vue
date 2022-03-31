<template>
  <div class="row">
    <h1>Order Details</h1>
    <p>
      <span id="information">Information</span> >
      <span id="shipping">Shipping</span> >
      <span id="payment">Payment</span>
    </p>
  </div>
  <form action="/CartShipping" method="GET">
  <div class="col-3">
    <label for="name">Name: </label><br />
    </div>
    <div class="d-flex justify-content-center">
      <div class="form-group col-md-9">
        <input type="text" id="name" name="name" /><br />
      </div>
    </div>
    <br />
    <div class="col-3">
    <label for="email>">Email Address: </label><br />
    </div>
    <div class="d-flex justify-content-center">
      
      <div class="form-group col-md-9">
        <input type="text" id="email" name="email" /><br />
      </div>
    </div>
    <br/>
    <br/>
    <ContinueToShippingButton/>
  </form>
</template>

<script>
import ContinueToShippingButton from "@/components/ContinueToShippingButton.vue"

export default {
  name: "OrderDetails",
  components: {
    ContinueToShippingButton
  },
  methods: {},
};
</script>

<style scoped>
p {
  font-weight: bold;
}
#shipping,
#payment {
  color: rgb(206, 204, 204);
  font-weight: normal;
}
#information {
  color: red;
  font-weight: bold;
}
#name, #email {
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
.input {
    border-radius: 20px 20px 20px 20px;
}
</style>

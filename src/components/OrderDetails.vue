<template>
  <div class="row">
    <h1>Order Details</h1>
    <p>
      <span id="information">Information</span> >
      <span id="shipping">Shipping</span> >
      <span id="payment">Payment</span>
    </p>
  </div>
  <form id="form" @submit.prevent="pushData" method="GET">
  <!-- <div class="col-3"> -->
    <div class="formFill">
    <label for="name">Name: </label><br />
    </div>
    <!-- <div class="d-flex justify-content-center"> -->
      <div class="formFill">
      
      <div class="form-group col-md-9">
        <input type="text" id="name" v-model="name" name="name" /><br />
      </div>
    </div>
    <br />
    <!-- <div class="col-3"> -->
      <div class="formFill">
    <label for="email>">Email Address: </label><br />
    </div>
    <!-- <div class="d-flex justify-content-center"> -->
      <div class="formFill">
      
      <div class="form-group col-md-9">
        <input type="text" id="email" v-model="email" name="email" /><br />
      </div>
    </div>
    <br/>
    <br/>
    <button type="submit" value="Continue to Shipping"  class="btn btn-primary">Continue to shipping</button>
  </form>
</template>

<script>
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
  name: "OrderDetails",
  components: {
  },
  data() {
    return {
    user: null,
    name: "",
    email: ""
    }
  },
  async mounted() {
    await this.getUser()
  },
  methods: {
      async getUser() {
      const auth = getAuth()
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.user = user
          this.name = user.displayName
          this.email = user.email
          return user.uid
          }
        } 
      )
    },
    async pushData() {
      this.$router.push({name: 'CartShipping', query: {name: this.name, email: this.email}})
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
.btn-primary {
    background-color: #F37381;
    border: None;
    margin: 1em;
    border-radius: 20px;
    padding: 0.5em 2em 0.5em 2em;
}

.btn-primary:hover {
    background-color: #dd6b79;
}

.btn-primary:active, .btn-primary:focus, .btn-primary:visited {
    background-color: #F37381;
}
</style>

<template>
  <div class="infoSection">
    <div class="userSection">
      <OrderDetails />
    </div>
    <v-row align="left">
      <h4>Cart</h4>
    </v-row>
    <div class="productsSection">
      <div id="contain">
        <div id="toCentre">
          <ViewPurchase />
        </div>
      </div>
    </div>
    <v-row align="left">
      <hr />
      <h5>Subtotal</h5>
      <h5>Shipping</h5>
      <hr />
      <h4>Total</h4>
    </v-row>
  </div>
  <div class="footer">
    <FooterMain />
  </div>
</template>

<script>
import OrderDetails from "@/components/OrderDetails.vue";
import FooterMain from "@/components/FooterMain.vue";
import ViewPurchase from "@/components/ViewPurchase.vue";

export default {
  name: "App",
  components: {
    OrderDetails,
    FooterMain,
    ViewPurchase,
  },
};
</script>
<style scoped>
.userSection {
  float: left;
  width: 75%;
  margin-bottom: 10%;
  height: 35vmax;
}
.productsSection {
  width: 25%;
  display: flex;
}
.footer {
  float: left;
}
#contain {
  height: 30vmax;
  overflow-y: scroll;
}
</style>
<template>   
  <div class="infoSection">
    <div class="userSection">
      <PaymentDetails/>
    </div>
    <div class="productsSection">
      <div id="contain">
        <div id="toCentre">
          <ViewPurchase />
        </div>
      </div>
    </div>
    <v-row align="left">
      <hr />
      <div class="row">
        <div class="col-sm-8"><h5>Subtotal</h5></div>
        <div class="col-sm-4"><h5>SGD XXX</h5></div>
      </div>
      <div class="row">
      <div class="col-sm-8"><h5>Shipping</h5></div>
      <div class="col-sm-4"><h6 id="nextStep">Next Step</h6></div>
      </div>
    </v-row>
    <hr />
    <v-row align="left">
      <div class="row">
      <div class="col-sm-8"><h4>Total</h4></div>
      <div class="col-sm-4"><h5>SGD XXX</h5></div>
      </div>
    </v-row>
  </div>
  <div class="footer">
    <FooterMain/>
  </div>
</template>
<script>
import PaymentDetails from "@/components/PaymentDetails"
import FooterMain from "@/components/footer_components/FooterMain.vue"
import ViewPurchase from "@/components/ViewPurchase.vue"

export default {
    components: {
        PaymentDetails,
        FooterMain,
        ViewPurchase
    }
}
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
#nextStep {
  color: rgb(206, 204, 204);
  font-weight: normal;
}
</style>
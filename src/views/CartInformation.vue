<template>
  <div class="infoSection">
    <div class="userSection">
      <OrderDetails />
    </div>
    <v-row align="left">
      <h4>Cart</h4>
    </v-row>
    <div class="productsSection">
      <div id="toCentre">
        <ViewPurchase :editable='editable'/>
      </div>
    </div>
    
  </div>
  <div class="footer">
    <FooterMain />
  </div>
</template>

<script>
import OrderDetails from "@/components/OrderDetails.vue";
import FooterMain from "@/components/footer_components/FooterMain.vue";
import ViewPurchase from "@/components/ViewPurchase.vue";

export default {
  name: "App",
  components: {
    OrderDetails,
    FooterMain,
    ViewPurchase,
  },
  data()  {
    return {
      editable: true
    }
  }
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
#nextStep {
  color: rgb(206, 204, 204);
  font-weight: normal;
}
</style>
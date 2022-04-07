<template>
  <div class="infoSection">
    <div class="userSection">
      <OrderDetails />
    </div>
    
    <div class="productsSection">
      <v-row align="left">
      <h4>Cart</h4>
    </v-row>
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
.infoSection{
  display: flex;
    flex-direction: row;
}
.userSection {
 flex-grow: 3;
    /* padding-left: 5%; */
    flex-basis: 0;
}
.productsSection {
  flex-grow: 1;
    /* padding-left: 5%; */
    flex-basis: 0;
}
/* .footer {
  float: left;
} */
#nextStep {
  color: rgb(206, 204, 204);
  font-weight: normal;
}
</style>
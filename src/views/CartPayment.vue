<template>   
  <div class="infoSection">
    <div class="userSection">
      <PaymentDetails/>
    </div>
    <div class="productsSection">
      <div id="toCentre">
        <ViewPurchase :editable='editable'/>
      </div>
    </div>
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
    },
  data()  {
    return {
      editable: false
    }
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
#nextStep {
  color: rgb(206, 204, 204);
  font-weight: normal;
}
</style>
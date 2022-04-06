<template>
  <div class="infoSection">
    <div class="userSection">
      <ShippingDetails/>
    </div>
    <div class="productsSection">
      <div id="contain">
        <div id="toCentre">
          <ViewPurchase />
        </div>
      </div>
    </div>
  </div>
  <div class="footer">
    <FooterMain/>
  </div>
</template>

<script>
import ShippingDetails from "@/components/ShippingDetails"
import FooterMain from "@/components/footer_components/FooterMain.vue"
import ViewPurchase from "@/components/ViewPurchase.vue"

export default {
  components: {
      ShippingDetails,
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
/* .userSection {
  float: left;
  width: 75%;
  margin-bottom: 10%;
  height: 35vmax;
}
.productsSection {
  width: 25%;
  display: flex;
} */
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
<template>
  <div class="infoSection">
    <div class="userSection">
      <ShippingDetails :name=name :email=email />
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
      name: this.$route.query.name,
      email: this.$route.query.email,
      editable: false
    }
  }
}
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
  flex-basis: 0;
}
#nextStep {
  color: rgb(206, 204, 204);
  font-weight: normal;
}

</style>
<template>
  <div class="infoSection">
    <div class="userSection">
      <ShippingDetails/>
    </div>
    <div class="productsSection">
      Add Product lists here
    </div>
  </div>
  <div class="footer">
    <FooterMain/>
  </div>
</template>

<script>
import ShippingDetails from "@/components/ShippingDetails"
import FooterMain from "@/components/FooterMain.vue"

export default {
    components: {
        ShippingDetails,
        FooterMain
    }

}
</script>

<style scoped>
.userSection {
  float: left;
  width: 80%;
  margin-bottom: 10%;
}
.productsSection {
  width: 20%;
  display: flex;
  border: 1px solid red
}
.footer {
  float:left;
}
</style>
<template>
  <div class="infoSection">
    <div class="userSection">
<OrderDetails />      
    </div>
    <div class="productsSection">
      Add adjustable Product lists here
    </div>
  </div>
  <div class="footer">
    <FooterMain/>
  </div>
</template>

<script>
import OrderDetails from "@/components/OrderDetails.vue"
import FooterMain from "@/components/FooterMain.vue"

export default {
  name: "App",
  components: {
      OrderDetails,
      FooterMain
  }
}
</script>
<style scoped>
.userSection {
  float: left;
  width: 70%;
  margin-bottom: 10%;
}
.productsSection {
  width: 30%;
  display: flex;
  border: 1px solid red
}
.footer {
  float:left;
}
</style>
<template>
  <div class="infoSection">
    <div class="userSection">
<OrderDetails />      
    </div>
    <div class="productsSection">
      <div id="contain">
        <div id="toCentre">
          <ViewPurchase/>
        </div>
      </div>
    </div>
  </div>
  <div class="footer">
    <FooterMain/>
  </div>
</template>

<script>
import OrderDetails from "@/components/OrderDetails.vue"
import FooterMain from "@/components/FooterMain.vue"
import ViewPurchase from "@/components/ViewPurchase.vue"

export default {
  name: "App",
  components: {
      OrderDetails,
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
}
.productsSection {
  width: 25%;
  display: flex;
  border: 1px solid red
}
.footer {
  float:left;
}
#contain {
  height: 25vmax;
  overflow-y: scroll;
}
</style>
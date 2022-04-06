<template>   
  <div class="infoSection">
    <div class="userSection">
      <PaymentDetails :data='data' />
    </div>
    <div class="productsSection">
      <div id="toCentre">
        <ViewPurchase :editable='editable' />
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
      data: this.$route.params,
      editable: false
    }
  },
  
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
    /* padding-left: 5%; */
    flex-basis: 0;
}
/* .userSection {
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
} */
#nextStep {
  color: rgb(206, 204, 204);
  font-weight: normal;
}
</style>
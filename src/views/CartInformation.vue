<template>
  <div class="float-container">
    <div class="first-child">
      <ProductScroll />
    </div>
    <div class="second-child">
      <ProductInformation />
    </div>
  </div>
  <!-- <div class="bottom">
    <div class= "first">
      <Reviews/>
    </div>
    <div class= "second">
      <SimilarItems/>
    </div>
  </div>
  <FooterMain/> -->
  <Reviews />
  <SimilarItems />
  <FooterMain />
</template>

<script>
import ProductScroll from "@/components/ProductScroll.vue";
import SimilarItems from "@/components/SimilarItems.vue";
import ProductInformation from "@/components/ProductInformation.vue";
import Reviews from "@/components/Reviews.vue";
import FooterMain from "@/components/FooterMain.vue";

export default {
  name: "App",
  components: {
    ProductScroll,
    ProductInformation,
    SimilarItems,
    Reviews,
    FooterMain,
  },
  data() {},
  methods: {},
};
</script>

<style></style>

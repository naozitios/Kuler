<template>
  <div id="banner-searchResults">
    <img src="@/assets/banner-Results.jpg" alt="Banner" class="img-fluid" />
  </div>
  <div class="row">
<div class="col-md-4 offset-md-8"><SortByButton /></div>
  </div>

  <div class="container pt-3" div="details">
    <div class="row">
      <div class="col-lg-2">
        <FilterOptions />
      </div>
      <div class="col-lg-10">
        <div class="row">
          <div class="col mb-3">
            <ProductCard3 />
          </div>
          <div class="col mb-3">
            <ProductCard3 />
          </div>
          <div class="col mb-3">
            <ProductCard3 />
          </div>
          <div class="col mb-3">
            <ProductCard3 />
          </div>
        </div>
        <div class="row">
          <div class="col mb-3">
            <ProductCard3 />
          </div>
          <div class="col mb-3">
            <ProductCard3 />
          </div>
          <div class="col mb-3">
            <ProductCard3 />
          </div>
          <div class="col mb-3">
            <ProductCard3 />
          </div>
        </div>
        <div class="row">
          <div class="col mb-3">
            <ProductCard3 />
          </div>
          <div class="col mb-3">
            <ProductCard3 />
          </div>
          <div class="col mb-3">
            <ProductCard3 />
          </div>
          <div class="col mb-3">
            <ProductCard3 />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div></div>
</template>
<style>
.work-page {
  width: 80vmax;
  margin-left: auto;
}
#banner-searchResults img {
  width: 100%;
  height: 20vh;
}
</style>

<script>
import FilterOptions from "@/components/FilterOptions.vue";
import ProductCard3 from "@/components/ProductCard3.vue";
import SortByButton from "@/components/SortByButton.vue";

export default {
  name: "App",
  components: {
    FilterOptions,
    ProductCard3,
    SortByButton,
  },
  data() {},
  methods: {},
};
</script>

<template>
  <div id="banner-searchResults">
    <img src="@/assets/banner-Results.jpg" alt="Banner" class="img-fluid" />
  </div>
  <div class="col-md-4 offset-md-8"><SortByButton /></div>
  <div class = "listings">
      <FilterOptions/>
      <Listings :category="category"/>
  </div>
</template>

<style scoped>
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
import SortByButton from "@/components/SortByButton.vue";
import Listings from "@/components/Listings.vue";

export default {
  name: "App",
  components: {
    FilterOptions,
    SortByButton,
    Listings
  },
   data() {
    return {
      category: 0
     }
  },
};
</script>

<style scoped>
.listings {
  margin-top: 5%;
}
</style>
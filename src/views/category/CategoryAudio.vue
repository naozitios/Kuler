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
<Listings :category="category" />
      </div>
    </div>
  </div>
</template>

<script>
import FilterOptions from "@/components/FilterOptions.vue";
import SortByButton from "@/components/SortByButton.vue";
import Listings from "@/components/Listings.vue";

export default {
  components: {
    FilterOptions,
    SortByButton,
    Listings,
  },
  data() {
    return {
      category: 4,
    };
  },
};
</script>

<style scoped>
.listings {
  margin-top: 5%;
}
</style>
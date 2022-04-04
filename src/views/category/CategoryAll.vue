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
        <FilterOptions :category="category" @showall = "changeAll"  @showdigital = "changeDigital"  @showphysical = "changePhysical"/>
      </div>
      <div class="col-lg-10">
        <Listings :category="category" :msg="passMsg"/>
      </div>
    </div>
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
    Listings,
  },
  methods: {
    changeAll() {
      console.log("ALLL")
    },
        changeDigital() {
      console.log("DIGITALLL")
    },
        changePhysical() {
      console.log("PHYSICALLL")
    }
  },
  data() {
    return {
      category: 0,
    };
  },
  computed: {
    passMsg() {
      return this.$route.query.name
    }
  },
};
</script>

<style scoped>
.listings {
  margin-top: 5%;
}
</style>
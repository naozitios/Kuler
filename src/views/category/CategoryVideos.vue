<template>
  <div id="banner-searchResults">
    <img src="@/assets/banner-Results.jpg" alt="Banner" class="img-fluid" />
  </div>
  <div class="row">
    <div class="col-md-4 offset-md-8"><SortByButton @sortByOldest = "oldestSort" @sortByPrice = "priceSort" @sortByRelavancy = "relevanceSort" @sortByNewest = "newestSort" @sortByRating="ratingSort"/></div>
  </div>
    <div class="row">
      <div class="col-lg-2">
      <FilterOptions :category="category" @showall = "changeAll"  @showdigital = "changeDigital"  @showphysical = "changePhysical"/>
      </div>
      <div class="col-lg-10">
        <Listings :category="category" :format="format" :sort="sort" />
      </div>
    </div>
</template>

<script>
import FilterOptions from '@/components/FilterOptions.vue'
import SortByButton from '@/components/SortByButton.vue'
import Listings from '@/components/Listings.vue'


export default {
    components: {
        FilterOptions,
        SortByButton,
        Listings
    },
      methods: {
    changeAll() {
      this.format = ""
    },
        changeDigital() {
      this.format = "Digital"
    },
        changePhysical() {
      this.format = "Physical"
    }, 
    oldestSort() {
      this.sort = 2
    }, 
    priceSort() {
      this.sort = 1
    },
    relevanceSort() {
      this.sort = 0
    },
    newestSort() {
      this.sort = 3
    },
    ratingSort() {
      this.sort = 4
    }
  },
    data() {
        return {
            category: 5,
            format: "",
            sort: 0
        }
    }
}
</script>

<style scoped>
.listings {
  margin-top: 5%;
}
.row {
  margin-left: 2%
}
</style>
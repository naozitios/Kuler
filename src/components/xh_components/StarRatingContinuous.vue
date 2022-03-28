<template>
    <div id ="starRating">
        <div id = "rating">
        <b><u>{{this.rating.toFixed(1)}}</u></b>
        </div>
        <div id = "stars">
    <star-rating v-bind:star-size="20"
    v-bind:read-only="true"
    v-bind:show-rating="false"
    v-bind:rating="this.rating"
    v-bind:increment="0.01"
    />
    </div>
    <div id = "numberOfReviews">
        {{this.numberOfReviews}} Reviews
    </div>
    </div>
</template>

<script>
import StarRating from 'vue-star-rating'

export default {

    data() {
        return {
            rating: 2.5,
            numberOfReviews: 5
        }
    },
    components: {
        StarRating
    },
}
</script>

<style scoped>
#starRating {
    display: flex;
}
#stars {
   margin-left: 4%; 
   padding-right: 5%;
   border-right: 2px solid grey;
}
#numberOfReviews {
    padding-left: 5%;

}
</style>
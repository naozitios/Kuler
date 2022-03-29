<template>
        <div id = "stars">
    <star-rating v-bind:star-size="20"
    v-bind:read-only="true"
    v-bind:show-rating="false"
    v-bind:rating="this.rating"
    v-bind:increment="0.01"
    />
    </div>

</template>

<script>
import StarRating from 'vue-star-rating'

export default {

    data() {

    },
    components: {
        StarRating
    },
    props: {
        rating: Number
    }
}
</script>

<style scoped>

#stars {
   margin-left: 4%; 
   padding-right: 5%;
   /* color: blue; */
}
</style>
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
<<<<<<< HEAD
}
=======
   /* color: blue; */
   /* border-right: 2px solid grey; */
}

>>>>>>> d5ef508b186147519170f1c1935478a87e52286c
</style>
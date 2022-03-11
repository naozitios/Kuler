<template>
    <div id = "section-main">
        <h5 id = "section-title">Reviews</h5>
        <StarRating/>
    </div>
    <Pagination/>
</template>

<script>
import StarRating from '@/components/StarRating.vue'
import Pagination from '@/components/Pagination.vue'

export default {
    name: 'Reviews',
    components:{
    StarRating,
    Pagination
  },
  data(){
    
  },
  methods:{
   
  }
}
</script>

<style scoped>
#section-main {
    padding: 5em 2em 0em 2em;
    background-color: #F7F0DD;
}
#section-main #section-title{
    font-weight: 900;
    text-align: left;
}


</style>
<template>
    <div id = "section-main">
        <h5 id = "section-title">Reviews</h5>
        <StarRating/>
    </div>
</template>

<script>
import StarRating from '@/components/StarRating.vue'

export default {
    name: 'Reviews',
    components:{
    StarRating
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
<template>
    <div id = "section-main">
        <h5 id = "section-title">Reviews&nbsp;<StarRating/></h5>
        <div id= "product-text"> 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis aliquam cursus.
          Aenean tortor odio, maximus at nisi in, 
          condimentum convallis ex. Nunc eu justo efficitur lectus iaculis maximus id sed lorem. 
      </div>
        <Pagination/>    
    </div>
    
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
    padding: 5em 2em 1em 2em;
    background-color: #F7F0DD;
}
#section-main #section-title{
    font-weight: 900;
    text-align: left;
    display: flex;
}
#product-text{
    display:flex;
}


</style>
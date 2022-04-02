<template>
<div class="card" style="width: 16vw" @click="directToProduct">
  <a href="#" class="productImg"><img class="card-img-top" src="@/assets/sample7.jpg"></a>
  <div class="card-body">
    <a href="#" class="productLink"><h4 class="card-title">{{this.productTitle}}</h4></a>
    <a href="#" class="sellerLink"><h5 class="seller-name">{{this.sellerName}}</h5></a>
    <div id="rating">
    <StarRating/>
    </div>
    <h4 class="card-title">SGD {{this.price}}</h4>
    <div id = "history" v-if="this.quantity">
     Quantity Purchased: <b><u> {{this.quantity}} </u></b>
     <br>
     Date of Purchase: 
     <br><b><u>{{this.timestamp}}</u></b>
    </div>
  </div>
</div>
</template>

<script>
import StarRating from '@/components/StarRating.vue'

export default {
    name: 'ProductCard3',
  components:{
    StarRating
  },
  props: {
      productTitle: String,
      sellerName: String,
      price: Number,
      coverImage: String,
      productNumber: String,
      quantity: Number,
      timestamp: String
  },
  methods:{
      directToProduct() {
          const productNum = this.productNumber
          this.$router.push({name: "Product Page", params: {id: productNum}})
      }
  },
}
</script>

<style scoped>
a {
    text-decoration: none;
}
.productImg:hover, .productLink:hover, .sellerLink:hover{
    opacity: 0.8;
    transition: 0.5s ease;

}
.productLink{
    color:rgb(0, 0, 0)
}
.sellerLink{
    color:#3A3D3B
}
.card {
margin-top: 1em;
cursor: pointer
}
#rating {
    text-align: left;
    margin-left: 0px;
    margin-right: auto;
    margin-bottom: 0.5em;
}
    .card-title{
        text-align: left;
        font-size: 90%;
        font-weight: bold;
    }
    .seller-name{
        color: #3A3D3B;
        text-align: left;
        font-size: 60%;
        font-weight: bold;
    }
#history {
    font-size: 80%
}
</style>
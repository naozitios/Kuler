<template>
    <div class="review">
        <!-- <a href = "#" class="buyerLink"> -->
            <h3 class = "buyerName">{{this.buyerName}}</h3>
            <!-- </a> -->
        <div id="rating">
            <StarRatingContinuous :rating = "rating"/>
        </div>
        <!-- <a href="#" class="reviewLink"> -->
            <h3 class="review">{{this.review}}</h3>
            <!-- </a> -->
        <!-- <a href="#" class="dateLink"> -->
            <h3 class="date">{{this.date}}</h3>
            <!-- </a> -->
    </div>
</template>

<script>
import StarRatingContinuous from '@/components/xh_components/StarRatingContinuous.vue'

export default ({
    name: 'singleReview',
    components: {
        StarRatingContinuous
    },
    props: {
        buyerName: String,
        review: String,
        date: String,
        rating: Number

    },
    
})
</script>

<style stopped>
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
margin-top: 0.5em;
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


</style>
<template>
    <div id = "section-main">
        <h5 id = "section-title">{{reviewCount}} Reviews&nbsp;
            <div class = "averageRate">
                <h5 id = "averageRate">{{averageRating}}</h5>
            </div>
            <div class = "rating" style = "position:relative; left:2px; bottom:3px;">
            <StarRatingContinuous :rating= "averageRating"/>
            </div>
            <div id = "leaveReview">
                <ul>
                <li><router-link to="/ReviewForm">Leave a Review</router-link></li>
                </ul>
            </h5>
        <!--Page 1-->
        
    </div>
    <div class = "reviewInfo">
            <div class="big-container" v-for="i in reviewCount" :key="ratings[i]">
                <div id = "review">
                    <div id = "name">
                        {{reviewNames[i-1]}}
                    </div>
                    <div id = "date">
                        {{dates[i-1]}}
                    </div>
                    <div id = "rating">
                        {{ratings[i-1]}}
                    </div>
                    <div id = "star-rating" style = "position:relative; left:2px; bottom:3px;">
                        <StarRatingContinuous :rating = "ratings[i-1]"/>
                  
                    </div>
                    </div>
                    <div id = "description">
                        {{reviews[i-1]}}<br><br>
                    </div>
        </div>
    </div>
    <!-- <VuePaginationTw
        :totalItems="this.reviews"
        :currentPage="1"
        :perPage="2"
        @pageChanged="functionName"
        :goButton="false"
        styled="centered"
    /> -->
        <!-- <div class = "overflow-auto" id = "review-container"></div> -->
        <!-- <div class = "page" id = "p1" ></div>
        <div class = "page" id = "p2" ></div>
        <div class = "page" id = "p3" ></div> -->

        <!-- <br>
      <div class= "pagination">
        <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Previous" v-on:click="goBack()">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li class="page-item"><a class="page-link" href="#" aria-current="page" v-on:click="setP1True()">{{this.reviews.length%3}}</a></li>
    <li class="page-item"><a class="page-link" href="#" aria-selected="false" v-on:click="setP2True()">2</a></li>
    <li class="page-item"><a class="page-link" href="#" aria-selected="false" v-on:click="setP3True()">3</a></li>

    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next" v-on:click="goNext()">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>  
        </div> -->

    
    
</template>

<script>
// import VuePaginationTw from "vue-pagination-tw";

import StarRatingContinuous from '@/components/xh_components/StarRatingContinuous.vue'
import firebaseApp from '../firebase.js';
import {
  getFirestore,
   getDoc, doc
} from "firebase/firestore";


const db = getFirestore(firebaseApp);

export default {
    name: 'Reviews',
    components:{
    StarRatingContinuous,
    // VuePaginationTw
  },
  data(){
    return {
        p1:true,
        p2:false,
        p3:false,
        message: '',
        reviewCount:0,
        rating: 0,
        reviews: [],
        ratings: [],
        reviewers: [],
        dates: [],
        averageRating: 0,
        totalRating: 0,
        reviewNames: []
    };
  },
  mounted() {
      this.mountReviews()
      .then(() => console.log(this.reviewers));
    //   this.functionName()

  },
  props: {
      productID: String,

  },
  methods:{
      async mountReviews() {
            const reviewsCollection = doc(db, "productratings",this.productID)
            const selectedReviews = await getDoc(reviewsCollection);
            const dataRef = selectedReviews.data()

            const tempReviews = dataRef.description
            this.reviews = this.reviews.concat(tempReviews)
            this.ratings = this.ratings.concat(dataRef.num_stars)
            this.reviewers = this.reviewers.concat(dataRef.user_id_buyer)
            this.dates = this.dates.concat(dataRef.date)
            this.reviewCount += dataRef.reviews
            console.log(this.reviews)
                    
            for (var i = 0; i < this.ratings.length; i++) {
                  this.totalRating += this.ratings[i]
              }
              this.averageRating = this.totalRating / this.reviewCount

            for (var j = 0; j < this.reviewers.length; j++) {
              const currentReviewer = this.reviewers[j]
              const nameRef = doc(db, "users", currentReviewer)
              const nameRefDoc = await getDoc(nameRef)
              const nameData = nameRefDoc.data()
              this.reviewNames[j] = nameData.display_name
              
          }
          console.log(this.reviewNames)

        },
    
      
      setP1True() {
          this.p1 = true,
          this.p2 = false,
          this.p3 = false
      },
      setP2True() {
          this.p1 = false,
          this.p2 = true,
          this.p3 = false
      },
      setP3True() {
          this.p1 = false,
          this.p2 = false,
          this.p3 = true
      },

      goBack() {
          if (this.p1) {
              return;
          }
          else if (this.p2) {
              this.setP1True();
          }
          else if (this.p3) {
              this.setP2True();
          }
      },
      goNext() {
          if (this.p1) {
              this.setP2True();
          }
          else if (this.p2) {
              this.setP3True();
          }
          else if (this.p3) {
              return;
            }
      },
        

  }
}
</script>
<style scoped>
#section-main {
    padding: 5em 2em 1em 2em;
    background-color: #F7F0DD;
}
.reviewInfo{
    background-color: #F7F0DD;
}
#section-main #section-title{
    font-weight: 900;
    text-align: left;
    display: flex;
}
.big-container{
    /* margin-bottom: 5%; */
    background-color: #F7F0DD;

}
#review {
    display: flex;
    
}
#name {
    margin-left:2%
}
#date {
    margin-left:2%;
}
#rating {
    margin-left:2%
}
#star-rating {
    margin-left:1%
}
#description {
    text-align: left;
    margin-left: 2%;
    background-color: #F7F0DD;
}
.pagination{
    margin-left:2%;
    background-color: #F7F0DD;
}
a {
    -moz-transition: color 0.2s ease, border-bottom 0.2s ease;
    -webkit-transition: color 0.2s ease, border-bottom 0.2s ease;
    -ms-transition: color 0.2s ease, border-bottom 0.2s ease;
    transition: color 0.2s ease, border-bottom 0.2s ease;
    text-decoration: none;
    /* border-bottom: dotted 1px; */
    color: inherit;
}

a:hover {
    border-bottom-color: transparent;
}
#leaveReview {
    -moz-transition: background-color 0.2s ease, border-top-left-radius 0.2s ease, border-top-right-radius 0.2s ease, padding 0.2s ease;
    -webkit-transition: background-color 0.2s ease, border-top-left-radius 0.2s ease, border-top-right-radius 0.2s ease, padding 0.2s ease;
    -ms-transition: background-color 0.2s ease, border-top-left-radius 0.2s ease, border-top-right-radius 0.2s ease, padding 0.2s ease;
    transition: background-color 0.2s ease, border-top-left-radius 0.2s ease, border-top-right-radius 0.2s ease, padding 0.2s ease;
    background-color: #ffffff;
    color: #636363;
    position: relative;
    width: 100%;
    max-width: 100%;
    padding: 0em 0em 1em 0em;
    /* background-color: #f7f7f7; */
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    cursor: default;
    text-align: center;
}

#leaveReview ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }

        #nav ul li {
            -moz-transition: margin 0.2s ease;
            -webkit-transition: margin 0.2s ease;
            -ms-transition: margin 0.2s ease;
            transition: margin 0.2s ease;
            display: inline-block;
            margin: 0 0.35em;
            padding: 0;
            vertical-align: middle;
        }

            #nav ul li a {
                -moz-transition: font-size 0.2s ease;
                -webkit-transition: font-size 0.2s ease;
                -ms-transition: font-size 0.2s ease;
                transition: font-size 0.2s ease;
                display: inline-block;
                height: 2.25em;
                line-height: 2.25em;
                padding: 0 1.25em;
                border: 0;
                border-radius: 8px;
                box-shadow: inset 0 0 0 1px transparent;
            }

                #nav ul li a:hover {
                    background-color: rgba(222, 222, 222, 0.2);
                    color: #F37381;
                }

                #nav ul li a.router-link-exact-active {
                    background-color: rgba(222, 222, 222, 0.25);
                    box-shadow: none;
                }

</style>
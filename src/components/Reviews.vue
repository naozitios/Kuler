<template>
    <div id = "section-main">
        <h5 id = "section-title">{{reviewCount}} Reviews&nbsp;
            <div class = "averageRate">
                <h5 id = "averageRate">{{averageRating}}</h5>
            </div>
            <div class = "rating" style = "position:relative; left:2px; bottom:3px;">
            <StarRatingContinuous :rating= "averageRating"/>
            </div>
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
                        {{reviews[i-1]}}
                    </div>
            
        </div>
    </div>
        <!-- <div class = "overflow-auto" id = "review-container"></div> -->
        <!-- <div class = "page" id = "p1" ></div>
        <div class = "page" id = "p2" ></div>
        <div class = "page" id = "p3" ></div>

        <br>
      <div class= "pagination">
        <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Previous" v-on:click="goBack()">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li class="page-item"><a class="page-link" href="#" aria-current="page" v-on:click="setP1True()">1</a></li>
    <li class="page-item"><a class="page-link" href="#" aria-selected="false" v-on:click="setP2True()">2</a></li>
    <li class="page-item"><a class="page-link" href="#" aria-selected="false" v-on:click="setP3True()">3</a></li>

    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next" v-on:click="goNext()">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>   -->
        <!-- </div> -->

    
    
</template>

<script>
// import singleReview from '@/components/singleReview.vue'
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
    // singleReview
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

  },
  props: {
      productID: String
  },
  methods:{
      async mountReviews() {
            const reviewsCollection = doc(db, "productratings",this.productID)
            const selectedReviews = await getDoc(reviewsCollection);
            const dataRef = selectedReviews.data()
            // console.log(selectedReviews.data())
            // const productRef = doc(db, "products",this.productID)
            // const product = await getDoc(productRef)
            // const productData = product.data()
            // console.log(productData)
            // const dataRef = doc.data()
            // console.log(dataRef)
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
      async createReviews() {
            var toAdd = document.createDocumentFragment();
            for (var i = 0; i < this.reviewCount; i++) {
                
                var newDiv = document.createElement('div');
                newDiv.style.display = "flex";
                newDiv.id = 'review'; // i.e. review-1
                const currentReview = this.reviews[i]
                const currentRating = this.ratings[i]
                const currentReviewer = this.reviewers[i]
                const currentDate = this.dates[i]
                // next i will wrap everyth around in divs because u cant set margin in text....
                var div1 = document.createElement('div');
                var paragraph1 = document.createElement("P");

                //set name of reviewer
                const reviewRef = doc(db, "users", currentReviewer)
                const reviewDataRef = await getDoc(reviewRef)
                const reviewData = reviewDataRef.data()
                const reviewerName = reviewData.display_name
                var text1 = document.createTextNode(reviewerName);
                paragraph1.appendChild(text1)
                div1.appendChild(paragraph1);


                var div2 = document.createElement('div');
                div2.style.marginLeft = "2%";
                var paragraph2 = document.createElement("P");
                var text2 = document.createTextNode(currentDate);
                paragraph2.appendChild(text2);
                div2.appendChild(paragraph2);

                var div3 = document.createElement('div');
                div3.style.marginLeft = "2%";
                var instance = document.getElementById(StarRatingContinuous,{currentRating});
                instance.mount()

                var div4 = document.createElement('div');
                var paragraph4 = document.createElement("P");
                var text4 = document.createTextNode(currentReview);
                paragraph4.appendChild(text4);
                div4.appendChild(paragraph4);

                newDiv.appendChild(div1);
                newDiv.appendChild(div2);
                newDiv.appendChild(div3);
                
                toAdd.append(newDiv);
                toAdd.append(div4);

            }
            document.getElementById("review-container").appendChild(toAdd)
                
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
    margin-bottom: 5%;
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


</style>
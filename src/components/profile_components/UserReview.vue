.<template>
  <div class = "container">
      <div class = "numberOfReviews">
          <div class = "star">
          <h2> {{reviewCount}} Reviews </h2>
          </div>
          <div class = "rating">
          </div>
      </div>
          <!--  hide with display: none. this is meant for the next elements to copy its innerHTML in JS-->
            <div class = "reviewInfo">
              <div id = "star-rating">
                  <StarRatingContinuous :rating = "ratings" :index = "currentIndex"/>
              </div>
            </div>
      <div class = "overflow-auto" id = "review-container">
      </div>
  </div>
</template>

<script>
import StarRatingContinuous from '@/components/xh_components/StarRatingContinuous.vue'
import firebaseApp from '../../firebase.js';
import {getFirestore} from "firebase/firestore";
const db = getFirestore(firebaseApp);
import {getDoc, doc, getDocs, collection} from "firebase/firestore";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import { createApp } from 'vue'

export default {

    data() {
        return {
            reviewCount: 0, 
            user: false,
            reviews: [],
            ratings: [],
            reviewers: [],
            dates: [],
        }
    },

    mounted() {
        const auth = getAuth()
        onAuthStateChanged(auth, (user) => {
        if (user) {
          this.user = user
          
        this.mountReviews()
        .then(() =>this.createReviews());
       
       }
    }) 
    },
    components: {
        StarRatingContinuous
    },

    methods: {
        async mountReviews() {
          const sellerRatings = await getDocs(collection(db, "productratings"))
          sellerRatings.forEach((doc) => {
              const dataRef = doc.data()
              if (dataRef.user_id_seller === this.user.uid) { // only pull out product ratings belonging to
                console.log(this.reviews)
                const tempReviews = dataRef.description
                this.reviews = this.reviews.concat(tempReviews)
                this.ratings = this.ratings.concat(dataRef.num_stars)
                this.reviewers = this.reviewers.concat(dataRef.user_id_buyer)
                this.dates = this.dates.concat(dataRef.date)
                this.reviewCount += dataRef.reviews
                }
              }
          )},
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

                // set name of reviewer
                const reviewRef = doc(db, "users", currentReviewer)
                const reviewDataRef = await getDoc(reviewRef)
                const reviewData = reviewDataRef.data()
                const reviewerName = reviewData.display_name
                var text1 = document.createTextNode(reviewerName); // insert name
                paragraph1.appendChild(text1)
                div1.appendChild(paragraph1);


                // set date of review
                var div2 = document.createElement('div');
                div2.style.marginLeft = "2%";
                var paragraph2 = document.createElement("P");
                var text2 = document.createTextNode(currentDate)
                paragraph2.appendChild(text2);
                div2.appendChild(paragraph2);
                
                // set rating of review
                var div3 = document.createElement('div');
                div3.style.marginLeft = "2%";
                const instance = createApp(StarRatingContinuous, {currentRating})
                instance.mount()
                //div3.appendChild(instance)

                var div4 = document.createElement('div');
                var paragraph4 = document.createElement("P");
                var text4 = document.createTextNode(currentReview)
                paragraph4.appendChild(text4);
                div4.appendChild(paragraph4);

                newDiv.appendChild(div1);
                newDiv.appendChild(div2);
                newDiv.appendChild(div3);
                
                toAdd.append(newDiv);
                toAdd.append(div4);
            }
            document.getElementById("review-container").appendChild(toAdd)
        }
    }
}
</script>

<style scoped>
.container {
    flex-direction: column;
    text-align: left;
}
.numberOfReviews {
    display: flex;
}
.rating {
    margin-left: 15px;
    padding-top: 5px;
}

.reviewInfo {
   display: none
}

.date, #star-rating {
    margin-left: 2%;
}

.overflow-auto {
    height: 400px;
}

</style>
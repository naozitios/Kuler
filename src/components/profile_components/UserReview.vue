.<template>
  <div class = "container">
      <div class = "numberOfReviews">
          <div class = "star">
          <h2> {{reviewCount}} Reviews </h2>
          </div>
          <div class = "averagerat">
              <b><u>{{averageRating}}</u></b>
          </div>
          <div class = "rating">
              
              <StarRatingContinuous :rating ="averageRating"/>
          </div>
      </div>
          <!--  hide with display: none. this is meant for the next elements to copy its innerHTML in JS-->
          <div class = "overflow-auto" v-if="this.areThereReviews">
            <div class = "big-container" v-for="i in reviewCount" :key= "ratings[i]">
              <div id = "everything">
                  <div id = "names">
                  {{reviewNames[i-1]}}  
                  </div> 
                  <div id = "dates">
                  {{dates[i-1]}}
                  </div>
                  <div id = "valueRating">
                      <b>{{this.ratings[i-1]}}</b>
                  </div>
                  <div id = "starRating">  
                 <StarRatingContinuous :rating = "ratings[i-1]"/>
                  </div>
              </div>
              <div id = "description">
                  {{reviews[i-1]}}
              </div>
            </div>
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
            averageRating: 0,
            totalRating: 0,
            reviewNames: [],
            areThereReviews: null
        }
    },

    props: {
        profileID: String
    },

    mounted() {
        const auth = getAuth()
        onAuthStateChanged(auth, (user) => {
        if (user) {
          this.user = user
          
        this.mountReviews()
        .then(() => console.log(this.totalRating));
       
       }
       if (!this.user) {
           this.mountReviews()
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
              if (dataRef.user_id_seller === this.profileID) { // only pull out product ratings belonging to
                console.log(this.reviews)
                const tempReviews = dataRef.description
                this.reviews = this.reviews.concat(tempReviews)
                this.ratings = this.ratings.concat(dataRef.num_stars)
                this.reviewers = this.reviewers.concat(dataRef.user_id_buyer)
                this.dates = this.dates.concat(dataRef.date)
                this.reviewCount += dataRef.reviews
                }
              }
          )
              for (var i = 0; i < this.ratings.length; i++) {
                  this.totalRating += this.ratings[i]
              }
              if (this.reviewCount == 0) {
                  this.averageRating = 0
                  this.areThereReviews = false
              } else {
                this.averageRating = Number((this.totalRating / this.reviewCount).toFixed(2))
                this.areThereReviews = true
              }
          
          for (var j = 0; j < this.reviewers.length; j++) {
              const currentReviewer = this.reviewers[j]
              const nameRef = doc(db, "users", currentReviewer)
              const nameRefDoc = await getDoc(nameRef)
              const nameData = nameRefDoc.data()
              this.reviewNames[j] = nameData.display_name
          }

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
    padding-top: 2px;
}

.averagerat {
    margin-left: 5%;
    padding-top: 0.5%
}

.big-container {
    display: column;
    margin-bottom: 5%;
}

#everything, .starRating {
    display: flex
}

#dates {
    margin-left: 5%
}

#valueRating {
    margin-left: 5%;
}

#starRating {
    margin-left: 2%;
}
.overflow-auto {
    height: 400px
}
</style>
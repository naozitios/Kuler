<template>
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
          <div id = "leaveReview" v-show="isVisible()">
                <h5 @click="checkReviewer" style="cursor:pointer;">Leave a Review</h5>
          </div>
      </div>
   <div class = "allReviews" v-if="this.areThereReviews">
            <div class = "big-container" v-for="i in reviewCount" :key="ratings[i]">
              <div id = "everything" v-if="checkIndex(i)">
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
              <div id = "description" v-if="checkIndex(i)">
                  {{reviews[i-1]}}
              </div>
            </div>
          </div>
   
  <ul class = "pagination">
    <li class = "pagination-item">
        <button type = "button" @click ="onClickFirstPage" :disabled="isInFirstPage"> First </button>
            </li>
    <li class = "pagination-item"> <button type = "button" @click="onClickPreviousPage" :disabled="isInFirstPage"> Previous </button>
    </li>
    <!-- visible buttons -->
    <li v-for="page in pages" :key="page.name" class = "pagination-item">
        <button type="button" @click="onClickPage(page.name)" :disabled="page.isDisabled" :class="{ active: isPageActive(page.name) }">
            {{page.name}}
        </button>
    </li>
    <!-- end of visible buttons -->
    <li class="pagination-item">
        <button type = "button" @click="onClickNextPage" :disabled="isInLastPage"> Next </button>
    </li>

    <li class="pagination-item"> 
        <button type = "button" @click="onClickLastPage" :disabled="isInLastPage"> Last </button>
    </li>
  </ul>

</template>

<script>
import firebaseApp from '../firebase.js';
import {getFirestore} from "firebase/firestore";
const db = getFirestore(firebaseApp);
import {getDoc, doc, getDocs, collection} from "firebase/firestore";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import StarRatingContinuous from '@/components/xh_components/StarRatingContinuous.vue'

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
            areThereReviews: null,
            profileID: null,
            totalPages: 0,
            
        }
    },

    emits: ["pagechanged"],

    components: {
        StarRatingContinuous
    },

    mounted() {
        const auth = getAuth()

        onAuthStateChanged(auth, (user) => {
        if (user) {
          this.user = user
          this.profileID = this.user.uid
          
        this.mountReviews()
        .then(() => this.calculateTotalPages());
        
  
       
       }
    }) 
    },

    props: {
        maxVisibleButtons: {
            type: Number,
            required: false,
            default: 3
        },

        perPage: {
            type: Number,
            required: true
        },

        currentPage: {
            type: Number,
            required: true
        },

        productNumber: String
    },

    computed: {
        startPage() { // used to check range of visible pages
            if (this.currentPage == 1) {
                return 1;
            }
            if (this.currentPage == this.totalPages) {
                return this.totalPages - this.maxVisibleButtons
            }

            return this.currentPage - 1
        },

        pages() {
            const range = [];

            for (let i = this.startPage; i <= Math.min(this.startPage + this.maxVisibleButtons - 1, this.totalPages); i++) {
                range.push({name: i, isDisabled: i == this.currentPage})
            }
            return range
        },

        isInFirstPage() {
            return this.currentPage === 1;
        },
        isInLastPage() {
            return this.currentPage === this.totalPages;
        },
        
    },

    methods: {
    onClickFirstPage() {
      this.$emit('pagechanged', 1);
    },
    onClickPreviousPage() {
      this.$emit('pagechanged', this.currentPage - 1);
    },
    onClickPage(page) {
      this.$emit('pagechanged', page);
    },
    onClickNextPage() {
      this.$emit('pagechanged', this.currentPage + 1);
    },
    onClickLastPage() {
      this.$emit('pagechanged', this.totalPages);
    },
    isPageActive(page) {
      return this.currentPage === page;
    },
    async mountReviews() {
          const sellerRatings = await getDocs(collection(db, "productratings"))
          sellerRatings.forEach((doc) => {
              const dataRef = doc.data()
              if (doc.id === this.productNumber) { // only pull out product ratings belonging to
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
                this.averageRating = this.totalRating / this.reviewCount
                this.areThereReviews = true
              }
          
          for (var j = 0; j < this.reviewers.length; j++) {
              const currentReviewer = this.reviewers[j]
              const nameRef = doc(db, "users", currentReviewer)
              const nameRefDoc = await getDoc(nameRef)
              const nameData = nameRefDoc.data()
              this.reviewNames[j] = nameData.display_name // provide display name
          }

    },

    checkIndex(i) {
        let range = this.currentPage * 3
        if (i >= range - 2 && i <= range) {
            return true
        } else {
            return false
        }
    },

    calculateTotalPages() { // set at 5 pages basic, if > 15 reviews then we extend.
        if (this.reviewCount < 12) {
            this.totalPages = 4
        } else {
            this.totalPages = Math.ceil(this.reviewCount / 3)
        }
    },
    async checkReviewer() {
        const reviewDoc = doc(db, "productratings", this.productNumber)
        const reviewDocRef = await getDoc(reviewDoc)
        const reviewData = reviewDocRef.data()
        const productID = this.productNumber
        if (reviewData.user_id_buyer.includes(this.user.uid)) {
            alert("You have already left a review.")
            this.$router.push({name: "ProductPage", params: {id: productID}})
        }
        else {
            this.$router.push({name: "ReviewFormPage", params: {id: productID}})
        
        }
    },
    
    async isVisible() {
        const purchaseDoc = doc(db, "users", this.user.uid)
        const purchaseDocRef = await getDocs(collection(purchaseDoc, "purchaseHistory"))
        console.log(purchaseDoc)
        console.log(purchaseDocRef)
        console.log(this.user.uid)
        purchaseDocRef.forEach(async (docs) => {
            let productData = docs.data();
            let productPurchases = productData.purchases;
            // console.log(productPurchases)
            // console.log(productData)
            console.log(Object.keys(productPurchases))
            console.log(this.productNumber)
            console.log(Object.keys(productPurchases).includes(this.productNumber))
            if (Object.keys(productPurchases).includes(this.productNumber)) {
                return true
            } else {
                return false
            }
        })
        
    }
    
  }

}
</script>

<style scoped>
.pagination {
  list-style-type: none;
}

.pagination-item {
  display: inline-block;
}

.active {
  background-color: #F37381;
  color: #ffffff;
}

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

#description  {
    text-align: left;
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
    margin-left: 2%;
    margin-bottom: 1%;
    border-radius: 30px;
    text-align:center;
    /* border: 0; */
    position:relative;
    display: inline-block;
    padding: 0.2em 0.5em 0em;
    white-space: nowrap;
    background-color: #F7F0DD
}

</style>
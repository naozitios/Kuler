<template>
    <div id = "section-main">
        <h5 id = "section-title">{{reviewCount}} Reviews&nbsp;<StarRating/></h5>
        <!--Page 1-->
        <div class = "reviewInfo">
              <div id = "rating">
                  <StarRatingNew/>
              </div>
            </div>
        <div class = "page" id = "p1" ></div>
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
</nav>  
        </div>
    </div>
    
    
</template>

<script>
import StarRatingNew from '@components/StarRatingNew.vue'
import firebaseApp from '../firebase.js';
import {getFirestore} from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
const db = getFirestore(firebaseApp);

export default {
    name: 'Reviews',
    components:{
    StarRatingNew
  },
  data(){
    return {
        p1:true,
        p2:false,
        p3:false,
        message: '',
        reviewCount:18
    };
  },
  mounted() {
      this.createReviews();
  },
  methods:{
      
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
      async createReviews() {
            let reviewPool = await getDoc(doc(db, "productratings", (this.product_id).toString()));
            let reviewPoolData = reviewPool.data();
            this.date = reviewPoolData.date;
            this.stars = reviewPoolData.num_stars;
            this.reviews = reviewPoolData.reviews;
            this.buyerID = reviewPoolData.user_id;
            const userRef = doc(db, "users", this.buyerID);
            const userDataRef = await getDoc(userRef);
            const userData = userDataRef.data();
            this.buyerName = userData.display_name;
            var toAdd = document.createDocumentFragment();
            for (var i = 0; i < this.reviewCount/6; i++) { //no. of pages
                
                var newDiv = document.createElement('div');
                newDiv.style.display = "flex";
                newDiv.id = 'review'; // i.e. review-1
                // next i will wrap everyth around in divs because u cant set margin in text....
                var div1 = document.createElement('div');
                var paragraph1 = document.createElement("P");
                var text1 = document.createTextNode(this.buyerName);
                paragraph1.appendChild(text1)
                div1.appendChild(paragraph1);


                var div2 = document.createElement('div');
                div2.style.marginLeft = "2%";
                var paragraph2 = document.createElement("P");
                var text2 = document.createTextNode(this.date);
                paragraph2.appendChild(text2);
                div2.appendChild(paragraph2);

                var div3 = document.createElement('div');
                div3.style.marginLeft = "2%";
                var stars = document.getElementById(this.stars);
                div3.innerHTML = stars.innerHTML

                var div4 = document.createElement('div');
                var paragraph4 = document.createElement("P");
                var text4 = document.createTextNode(this.reviews);
                paragraph4.appendChild(text4);
                div4.appendChild(paragraph4);

                newDiv.appendChild(div1);
                newDiv.appendChild(div2);
                newDiv.appendChild(div3);
                
                toAdd.append(newDiv);
                toAdd.append(div4);
            }
            
            
            document.getElementById("p1").appendChild(toAdd)

        },
        

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
#reviewer{
    padding-top:2em;
    display:flex;
}
#product-text{
    display:flex;
}

.reviewInfo {
    display: none;
}

.date, #rating {
    margin-left: 2%;
}




</style>
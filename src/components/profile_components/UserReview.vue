.<template>
  <div class = "container">
      <div class = "numberOfReviews">
          <div class = "star">
          <h2> {{reviewCount}} Reviews </h2>
          </div>
          <div class = "rating">
          <StarRating/>
          </div>
      </div>
      <div class = "overflow-auto" id = "review-container2">
          <!--  hide with display: none. this is meant for the next elements to copy its innerHTML in JS-->
          <div class = "reviewInfo"> 
              <div class = "name">
              Sharon Goh
              </div>
              <div class = "date">
                  13/2/22
              </div>
              <div id = "star-rating">
                  <StarRating/>
              </div>
          </div>
      </div>
      <div class = "overflow-auto" id = "review-container">
          </div>
  </div>
</template>

<script>
import StarRating from '@/components/StarRating.vue'
export default {

    data() {
        return {
            reviewCount: 10 // add getter next time to modify this value.
        }
    },

    mounted() {
        this.createReviews();
    },
    components: {
        StarRating
    },

    methods: {
        createReviews() {
            var toAdd = document.createDocumentFragment();
            for (var i = 0; i < this.reviewCount; i++) {
                var newDiv = document.createElement('div');
                newDiv.style.display = "flex";
                newDiv.id = 'review'; // i.e. review-1
                // next i will wrap everyth around in divs because u cant set margin in text....
                var div1 = document.createElement('div');
                var paragraph1 = document.createElement("P");
                var text1 = document.createTextNode("Name of Reviewer");
                paragraph1.appendChild(text1)
                div1.appendChild(paragraph1);


                var div2 = document.createElement('div');
                div2.style.marginLeft = "2%";
                var paragraph2 = document.createElement("P");
                var text2 = document.createTextNode("Date")
                paragraph2.appendChild(text2);
                div2.appendChild(paragraph2);

                var div3 = document.createElement('div');
                div3.style.marginLeft = "2%";
                var stars = document.getElementById("star-rating");
                div3.innerHTML = stars.innerHTML

                var div4 = document.createElement('div');
                var paragraph4 = document.createElement("P");
                var text4 = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis aliquam cursus. Aenean tortor odio,  maximus at nisi in, condimentum convallis ex. Nunc eu justo efficitur lectus iaculis maximus id sed lorem. ")
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
    display: none;
}

.date, #star-rating {
    margin-left: 2%;
}

.overflow-auto {
    height: 400px; /* can't find a way to use % */
}

</style>
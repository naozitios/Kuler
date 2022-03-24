.<template>
  <div class = "container">
      <div class = "numberOfReviews">
          <div class = "star">
          <h2> 19 Reviews </h2>
          </div>
          <div class = "rating">
          <StarRating/>
          </div>
      </div>
      <div class = "overflow-auto">
          <div class = "reviewInfo">
              <div class = "name">
              Sharon Goh
              </div>
              <div class = "date">
                  13/2/22
              </div>
              <div class = "star-rating">
                  <StarRating/>
              </div>
          </div>
          <div class = "review-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis aliquam cursus. Aenean tortor odio, 
              maximus at nisi in, condimentum convallis ex. Nunc eu justo efficitur lectus iaculis maximus id sed lorem. 
          </div>
           <div class = "reviewInfo">
              <div class = "name">
              Sharon Goh
              </div>
              <div class = "date">
                  13/2/22
              </div>
              <div class = "star-rating">
                  <StarRating/>
              </div>
          </div>
          <div class = "review-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis aliquam cursus. Aenean tortor odio, 
              maximus at nisi in, condimentum convallis ex. Nunc eu justo efficitur lectus iaculis maximus id sed lorem. 
          </div>
           <div class = "reviewInfo">
              <div class = "name">
              Sharon Goh
              </div>
              <div class = "date">
                  13/2/22
              </div>
              <div class = "star-rating">
                  <StarRating/>
              </div>
          </div>
          <div class = "review-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis aliquam cursus. Aenean tortor odio, 
              maximus at nisi in, condimentum convallis ex. Nunc eu justo efficitur lectus iaculis maximus id sed lorem. 
          </div>
           <div class = "reviewInfo">
              <div class = "name">
              Sharon Goh
              </div>
              <div class = "date">
                  13/2/22
              </div>
              <div class = "star-rating">
                  <StarRating/>
              </div>
          </div>
          <div class = "review-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis aliquam cursus. Aenean tortor odio, 
              maximus at nisi in, condimentum convallis ex. Nunc eu justo efficitur lectus iaculis maximus id sed lorem. 
          </div>
           <div class = "reviewInfo">
              <div class = "name">
              Sharon Goh
              </div>
              <div class = "date">
                  13/2/22
              </div>
              <div class = "star-rating">
                  <StarRating/>
              </div>
          </div>
          <div class = "review-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis aliquam cursus. Aenean tortor odio, 
              maximus at nisi in, condimentum convallis ex. Nunc eu justo efficitur lectus iaculis maximus id sed lorem. 
          </div>
      </div>
  </div>
</template>

<script>
import StarRating from '@/components/StarRating.vue'
export default {
    components: {
        StarRating
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
    display: flex;
    margin-top: 2%;
}

.date, .star-rating {
    margin-left: 2%;
}

.overflow-auto {
    height: 400px; /* can't find a way to use % */
}
</style>
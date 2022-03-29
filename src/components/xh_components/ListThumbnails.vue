<template>
  <div class="thumbnails">
        <div class="first">
  <img :src="firstThumbnail" class="img-thumbnail" alt="">
        </div>
        <div class="second">
  <img :src="secondThumbnail" class="img-thumbnail" alt="...">
        </div>
        <div class="third">
  <img :src="thirdThumbnail" class="img-thumbnail" alt="...">
        </div>
        <div class="fourth">
  <img :src="fourthThumbnail" class="img-thumbnail" alt="...">
        </div>
  </div>
</template>

<script>
import firebaseApp from '../../firebase.js';
import {getFirestore} from "firebase/firestore";
import {doc, updateDoc} from "firebase/firestore";
const db = getFirestore(firebaseApp);
export default {
      props: {
            firstpic: String,
            supportingpic : String,
            productNumber: Number
      },
    data() {
            return {
                  firstThumbnail: null,
                  secondThumbnail: null,
                  thirdThumbnail: null,
                  fourthThumbnail: null,
                  supportingImageCount: 0
            }
      },
      watch: {
            firstpic: function () {
                  this.firstThumbnail = this.firstpic
            },
            supportingpic: function() {
                  this.changeSupportingPictures(this.supportingpic);
            },
            productNumber: async function() {
                  const docRef = doc(db, "products", this.productNumber.toString())
                  await updateDoc(docRef, {
                        coverimage: this.firstThumbnail,
                        image1: this.secondThumbnail,
                        image2: this.thirdThumbnail,
                        image3: this.fourthThumbnail
                  })
                  .then(() => {
                        alert("Your product has been successfully listed.")
                        document.location.reload(true)
                  })
            }
      },
      mounted() {
            this.firstThumbnail = "https://imageio.forbes.com/specials-images/imageserve/5ed6636cdd5d320006caf841/The-Blackout-Tuesday-movement-is-causing-Instagram-feeds-to-turn-black-/960x0.jpg"
            this.resetSupportingPictures()
      },
      methods: {
          resetSupportingPictures() {
            this.secondThumbnail = "https://imageio.forbes.com/specials-images/imageserve/5ed6636cdd5d320006caf841/The-Blackout-Tuesday-movement-is-causing-Instagram-feeds-to-turn-black-/960x0.jpg"
            this.thirdThumbnail = "https://imageio.forbes.com/specials-images/imageserve/5ed6636cdd5d320006caf841/The-Blackout-Tuesday-movement-is-causing-Instagram-feeds-to-turn-black-/960x0.jpg"
            this.fourthThumbnail = "https://imageio.forbes.com/specials-images/imageserve/5ed6636cdd5d320006caf841/The-Blackout-Tuesday-movement-is-causing-Instagram-feeds-to-turn-black-/960x0.jpg"
        },
        changeSupportingPictures(x) {
            if (this.supportingImageCount == 0) {
                  this.secondThumbnail = x;
            } else if (this.supportingImageCount == 1) {
                  this.thirdThumbnail = x;
            } else if (this.supportingImageCount == 2) {
                  this.fourthThumbnail = x;
            } else {
                  this.supportingImageCount = 0;
                  this.resetSupportingPictures();
                  this.secondThumbnail = x;
            }
            this.supportingImageCount++;
        },
      }
}
</script>

<style scoped>
/* setting height and width of thumbnails still causes images to resize. */
img {
      height: 90px;
      width: 90px;
}
</style>
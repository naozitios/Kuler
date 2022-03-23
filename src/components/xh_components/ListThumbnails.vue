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
export default {
    data() {
            return {
                  firstThumbnail: null,
                  secondThumbnail: null,
                  thirdThumbnail: null,
                  fourthThumbnail: null,
                  supportingImageCount: 0

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
        }
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
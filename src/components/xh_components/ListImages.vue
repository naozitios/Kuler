<template>
  <div class ="upload">
        <div class = "cover">
              <div class = "uploadpic">
              <img src="https://icons.iconarchive.com/icons/papirus-team/papirus-apps/256/upload-pictures-icon.png" alt = "">
              </div>
              <div class = "uploadbar">
              <label class="cover-button">
    Upload Cover Photo <input type="file" @change = "changeCoverPicture" ref = "firstFile" hidden>
</label>
              </div>
              <div class="uploadtext">
                    <b>Tip: This is the first image buyers see, 
                    <br>make a good first impression!</b>
                    <br><br>
                    To replace cover photo, simply reupload!
              </div>
              </div>
      <!-- uploading multiple pics part -->
      <div class = "cover2">

              <div class = "uploadpic2">
              <img src="https://icons.iconarchive.com/icons/mag1cwind0w/colorful-morning/128/CM-C-Pictures-1-icon.png" alt = "">
              </div>
              <div class = "uploadbar2">
              <label class="images-button">
    Select Images <input type="file" @change = "changeSupportingPictures" ref = "nextFiles" hidden>
</label>
              </div>
              <div class="uploadtext2">
                    <b>Choose to display up to 3 additional images.</b>
                    <br>
                    <br>
                    If more than 3 images are inserted,
                    <br>
                    The images other than the cover photo gets reset.
              </div>
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
        emits: ["coverpicture", "supportingpicture"],


      methods: {
        changeCoverPicture() {
            let input = this.$refs.firstFile
            let file = input.files
            if (file && file[0]) {
                  let reader = new FileReader
                  reader.onload = e => {
                        this.firstThumbnail = e.target.result
                        this.$emit('coverpicture', e.target.result)
                  }
                  reader.readAsDataURL(file[0])
                  
            }
        },

        changeSupportingPictures() {
            let input = this.$refs.nextFiles
            let file = input.files
            if (file && file[0]) {
                  let reader = new FileReader
                  reader.onload = e => {
                        this.firstThumbnail = e.target.result
                        this.$emit('supportingpicture', e.target.result)
                  }
                  reader.readAsDataURL(file[0])
                  
            }
        },
        
        resetSupportingPictures() {
            this.secondThumbnail = "https://imageio.forbes.com/specials-images/imageserve/5ed6636cdd5d320006caf841/The-Blackout-Tuesday-movement-is-causing-Instagram-feeds-to-turn-black-/960x0.jpg"
            this.thirdThumbnail = "https://imageio.forbes.com/specials-images/imageserve/5ed6636cdd5d320006caf841/The-Blackout-Tuesday-movement-is-causing-Instagram-feeds-to-turn-black-/960x0.jpg"
            this.fourthThumbnail = "https://imageio.forbes.com/specials-images/imageserve/5ed6636cdd5d320006caf841/The-Blackout-Tuesday-movement-is-causing-Instagram-feeds-to-turn-black-/960x0.jpg"
        }
    }
}
</script>

<style scoped>


.upload {
    display: flex;
    background-color: beige;
    margin-left: 2%;
    border-radius: 20px 20px 20px 20px;
    padding-left: 5%;
    padding-right: 0%;
 /* this means that width of right <= 30% */
    padding-top: 10%;
    padding-bottom: 10%;
}

img {
    height: 125px;
    width: auto;
}

.cover {
    border-right: 2px solid #F37381;
    padding-right: 5%;
    width: 45%;
}

.cover-button {
    width: 80%;
  position: relative;
  display: inline-block;
  margin: 1em;
  padding: 1em 2em;
  border: 0;
  border-radius: 30px;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  font-size: 14px;
  color: white;
  font-weight: bold;
  background-color: #F37381;
}

.uploadtext {
    text-align: left;
    padding-left: 10%;
}

.cover2 {
    padding-left: 5%;
    width: 50%;
}

.images-button {
    width: 80%;
  position: relative;
  display: inline-block;
  margin: 1em;
  padding: 1em 2em;
  border: 0;
  border-radius: 30px;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  font-size: 14px;
  color: white;
  font-weight: bold;
  background-color: #F37381;
}

.uploadtext2 {
    padding-left: 10%;
    text-align: left;
}
</style>
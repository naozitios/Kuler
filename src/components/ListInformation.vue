<template>
    <div class="page">
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
  <div class = "second-container">
  <div class ="upload">
        <div class = "cover">

              <div class = "uploadpic">
              <img src="https://icons.iconarchive.com/icons/papirus-team/papirus-apps/256/upload-pictures-icon.png" alt = "">
              </div>
              <div class = "uploadbar">
              <label class="btn btn-default">
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
              <label class="btn btn-default2">
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
        <div class="description">
    <label for="titleOfProduct">Product Description </label>
    <input type="email" class="form-control" id="productDescription" aria-describedby="emailHelp" placeholder="">
  </div>
  </div>
  <div class ="productInfo">
        <div class="title">
    <label for="titleOfProduct">Title </label>
    <input type="email" class="form-control" id="titleOfProduct" aria-describedby="emailHelp" placeholder="">
  </div>
  <div class="price">
    <label for="productPrice">Price (SGD) </label>
    <input type="email" class="form-control" id="productPrice" aria-describedby="emailHelp" placeholder="">
  </div>
  <div class = "licenseOptions">
        License   
        <a href = "https://www.artismycareer.com/management/how-to-license-your-art-a-beginners-guide-to-artwork-licensing/"> Learn More </a>
        <br>
        <select class="custom-select">
        <option selected>Attribution CC BY</option>
        <option value="1">Attribution ShareALike CC BY-SA</option>
        <option value="2">Attribution-NoDerivs CC BY-ND</option>
        <option value="3">Attribution-NonCommercial CC BY-NC</option>
        <option value="4">Attribution-NonCommercial-ShareAlike CC BY-NC-SA CC BY</option>
        <option value="5">Attribution-NonCommercial-NoDerivs CC BY-NC-ND</option>

</select>

  </div>
  <div class = "categoryOptions">
        Category   
        <br>
        <select class="custom-select2">
        <option selected>Choose Category</option>
        <option value="1">Icons</option>
        <option value="2">Photography</option>
        <option value="3">Collectibles</option>
        <option value="4">Audio</option>
        <option value="5">Videos</option>
        <option value="6">Vintage</option>
</select>

  </div>
  <div class = "formatOptions"> 
  Format
  <br>
  <div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="digital" value="option1" checked>
  <label class="form-check-label" for="digital">
    Digital
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="physical" value="option2">
  <label class="form-check-label" for="physical">
    Physical
  </label>
</div>
  </div>
  <div class = "shippingOptions"> 
  Shipping Options
  <br>
  <div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="collectionPoint" value="option1" checked>
  <label class="form-check-label" for="collectionPoint">
    Collection Point
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="standardEconomy" value="option2">
  <label class="form-check-label" for="standardEconomy">
    Standard Economy
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="standardExpress" value="option2">
  <label class="form-check-label" for="standardExpress">
    Standard Express
  </label>
</div>
  </div>
  <div class = "listButton">
        <button class="btn btn-primary" id = "listButton" type="button"><h3>List Item</h3></button>
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
      mounted() {
            this.firstThumbnail = "https://imageio.forbes.com/specials-images/imageserve/5ed6636cdd5d320006caf841/The-Blackout-Tuesday-movement-is-causing-Instagram-feeds-to-turn-black-/960x0.jpg"
            this.resetSupportingPictures()

      },
      methods: {
        changeCoverPicture() {
            let input = this.$refs.firstFile
            let file = input.files
            if (file && file[0]) {
                  let reader = new FileReader
                  reader.onload = e => {
                        this.firstThumbnail = e.target.result
                  }
                  reader.readAsDataURL(file[0])
                  this.$emit('input', file)
            }
        },
        changeSupportingPictures() {
            let input = this.$refs.nextFiles
            let file = input.files
            if (file && file[0]) {
                  let reader = new FileReader
                  if (this.supportingImageCount == 0) {
                        reader.onload = e => {
                              this.secondThumbnail = e.target.result
                        }
                        reader.readAsDataURL(file[0])
                        this.$emit('input', file)
                  } else if (this.supportingImageCount == 1) {
                        reader.onload = e => {
                              this.thirdThumbnail = e.target.result
                        }
                        reader.readAsDataURL(file[0])
                        this.$emit('input', file)
                  } else if (this.supportingImageCount == 2) {
                        reader.onload = e => {
                              this.fourthThumbnail = e.target.result
                        }
                        reader.readAsDataURL(file[0])
                        this.$emit('input', file)
                  } else { // in this case, images are full. reset
                        this.supportingImageCount = 0;
                        this.resetSupportingPictures();
                        reader.onload = e => {
                              this.secondThumbnail = e.target.result
                        }
                        reader.readAsDataURL(file[0])
                        this.$emit('input', file)
                  }
                  this.supportingImageCount++;
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

[hidden] {
  display: none !important;
}

.page{
      display: flex;

}
/* change width of boxes */
.thumbnails {
      text-align: left;
      max-width: 5%;
}

.thumbnails img {
      border-radius: 10px 10px 10px 10px;

}

.second-container {
      flex-direction: column;
      width: 70%;
}


/* main css for beige portion */
.upload {
      display: flex;
      background-color: beige;
      padding-left: 5%;
      margin-left: 2%;
      padding-top: 10%;
      padding-bottom: 10%;   
      padding-right: 5%;
      border-radius: 30px 30px 30px 30px; 
      
}
/* blanket for flexbox, column */
.cover {
      flex-direction: column;
      padding-right: 5%;
      border-right: 2px solid #F37381;
}

.uploadpic img {
      max-width: 43%;
      padding-top: 1%;
}
.uploadbar {
      max-width: 90%;
      padding-left: 5%;
}
/* upload button css */

.btn.btn-default {
      width: 100%;
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

/* second upload */
.cover2 {
      flex-direction: column;
      padding-left: 5%;
}

.uploadpic2 img {
      max-width: 50%;
      padding-top: 1%;
}
.uploadbar2 {
      max-width: 80%;
      padding-left: 10%;
}

.btn.btn-default2 {
      width: 100%;
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

/* product Description */

.description {
      text-align: left;
      font-weight: bold;
      margin-top: 2%;
      margin-left: 2%;
}

#productDescription {
      background-color: lightgray;
      height: 100px;
      border-radius: 20px 20px 20px 20px;
}

/* right part of page: all the forms */
.productInfo {
      text-align: left;
      margin-left: 2%;
      font-weight: bold;
      flex-direction: column;
      margin-right: 1%;
}

#titleOfProduct, #productPrice {
      border-radius: 10px;
      background-color: lightgray;
      margin-top: 2%;
}
.price {
      margin-top: 5%;
}

.licenseOptions, .categoryOptions, .formatOptions, .shippingOptions {
      margin-top: 5%;
}

.custom-select {
      border-radius: 10px;
      background-color: lightgray;
      width: 100%;
      height: 35px;
      margin-top: 2%;
}

.custom-select2 {
      border-radius: 10px;
      background-color: lightgray;
      width: 100%;
      height: 35px;
      margin-top: 2%;
}

/* list button has id listButton for reference */
.listButton {
      margin-top: 2%;
}

.btn.btn-primary {
      width: 100%;
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

</style>
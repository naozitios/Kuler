<template>
    <div class="page">
    <div class="thumbnails">
        <div class="first">
  <img src="https://imageio.forbes.com/specials-images/imageserve/5ed6636cdd5d320006caf841/The-Blackout-Tuesday-movement-is-causing-Instagram-feeds-to-turn-black-/960x0.jpg" class="img-thumbnail" alt="">
        </div>
        <div class="second">
  <img src="https://imageio.forbes.com/specials-images/imageserve/5ed6636cdd5d320006caf841/The-Blackout-Tuesday-movement-is-causing-Instagram-feeds-to-turn-black-/960x0.jpg" class="img-thumbnail" alt="...">
        </div>
        <div class="third">
  <img src="https://imageio.forbes.com/specials-images/imageserve/5ed6636cdd5d320006caf841/The-Blackout-Tuesday-movement-is-causing-Instagram-feeds-to-turn-black-/960x0.jpg" class="img-thumbnail" alt="...">
        </div>
        <div class="fourth">
  <img src="https://imageio.forbes.com/specials-images/imageserve/5ed6636cdd5d320006caf841/The-Blackout-Tuesday-movement-is-causing-Instagram-feeds-to-turn-black-/960x0.jpg" class="img-thumbnail" alt="...">
        </div>
  </div>
  <div class ="upload">
        <div class = "cover">

              <div class = "uploadpic">
              <img src="https://icons.iconarchive.com/icons/papirus-team/papirus-apps/256/upload-pictures-icon.png" alt = "">
              </div>
              <div class = "uploadbar">
              <label class="btn btn-default">
    Upload Cover Photo <input type="file" hidden>
</label>
              </div>
              <div class="uploadtext">
                    Tip: This is the first image buyers see, 
                    <br>make a good first impression!
              </div>
              </div>
      <!-- uploading multiple pics part -->
      <div class = "cover2">

              <div class = "uploadpic2">
              <img src="https://icons.iconarchive.com/icons/mag1cwind0w/colorful-morning/128/CM-C-Pictures-1-icon.png" alt = "">
              </div>
              <div class = "uploadbar2">
              <label class="btn btn-default2">
    Select Images <input type="file" hidden>
</label>
              </div>
              <div class="uploadtext2">
                    Choose to display up to 3 additional images.
              </div>
              </div>
  </div>
  <div class ="productInfo">
        <div class="form-group">
    <label for="titleOfProduct">Title </label>
    <input type="email" class="form-control" id="titleOfProduct" aria-describedby="emailHelp" placeholder="Enter email">
  </div>
  </div>
    </div>
  
</template>

<script>
export default {
      methods: {
        uploadPhoto() {
              console.log("I can see you!");
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
      max-width: 5%;
      text-align: left;
}

.thumbnails img {
      border-radius: 20px 20px 20px 20px;
}

/* main css for beige portion */
.upload {
      background-color: beige;
      padding-left: 5%;
      margin-left: 2%;
      padding-top: 5%;
      padding-bottom: 5%;
      display: flex;
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
      max-width: 50%;
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

/* right part of page: all the forms */
.productInfo {
      text-align: left;
      margin-left: 2%;
      
}

#titleOfProduct {
      border-radius: 10px;
      background-color: lightgray;
}
</style>
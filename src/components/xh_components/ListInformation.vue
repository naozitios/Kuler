<template>
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
  <input class="form-check-input" type="radio" name="format" id="digital" value="option1" checked>
  <label class="form-check-label" for="digital">
    Digital
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="format" id="physical" value="option2">
  <label class="form-check-label" for="physical">
    Physical
  </label>
</div>
  </div>
  <div class = "shippingOptions"> 
  Shipping Options
  <br>
  <div class="form-check">
  <input class="form-check-input" type="radio" name="delivery" id="collectionPoint" value="option1" checked>
  <label class="form-check-label" for="collectionPoint">
    Collection Point
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="delivery" id="standardEconomy" value="option2">
  <label class="form-check-label" for="standardEconomy">
    Standard Economy
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="delivery" id="standardExpress" value="option2">
  <label class="form-check-label" for="standardExpress">
    Standard Express
  </label>
</div>
  </div>
  <div class = "listButton">
        <button class="btn btn-primary" id = "listButton" type="button"><h3>List Item</h3></button>
  </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.productInfo {
    width: 21%;
    margin-left: 2%;
    text-align: left;
}

.price,.licenseOptions, .categoryOptions, .formatOptions, .shippingOptions {
    margin-top: 5%;
}

#titleOfProduct, #productPrice {
    border-radius: 20px;
    background-color: lightgrey
}

.custom-select, .custom-select2 {
    width: 100%;
    border-radius: 20px;
    background-color: lightgrey;
    height: 40px;
}

.btn.btn-primary {
      width: 95%;
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

.listButton {
    margin-top: 20%;
}

</style>
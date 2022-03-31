<template>
  <div class ="productInfo">
    <form id = "myform">
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
        <select id="custom-select">
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
        <select id="custom-select2">
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
  <input class="form-check-input" type="radio" name="format" id="digital"  @click= "isDigital" value="Digital" checked>
  <label class="form-check-label" for="digital">
    Digital
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="format" id="physical" @click= "isPhysical" value="Physical">
  <label class="form-check-label" for="physical">
    Physical
  </label>
</div>
  </div>
  <div class = "shippingOptions" v-if="isPhysicalChecked"> 
  Shipping Options
  <br>
  <div class="form-check">
  <input class="form-check-input" type="radio" name="delivery" id="collectionPoint" value="Collection Point" checked>
  <label class="form-check-label" for="collectionPoint">
    Collection Point
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="delivery" id="standardEconomy" value="Standard Economy">
  <label class="form-check-label" for="standardEconomy">
    Standard Economy
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="delivery" id="standardExpress" value="Standard Express">
  <label class="form-check-label" for="standardExpress">
    Standard Express
  </label>
</div>
  </div>
  <div class = "listButton">
        <button class="btn btn-primary" id = "listButton" type="button" @click="addProduct"><h3>List Item</h3></button>
  </div>
    </form>
  </div>
</template>

<script>
import firebaseApp from '../../firebase.js';
import {getFirestore} from "firebase/firestore";
import {collection, setDoc, getDocs, doc, updateDoc, arrayUnion} from "firebase/firestore";
const db = getFirestore(firebaseApp);
import {getAuth, onAuthStateChanged} from "firebase/auth";
export default {
    data() {
      return {
        numberOfProducts: null,
        isPhysicalChecked: false,
        user: false
      }
    },
    methods: {
        async addProduct() {
          var title = document.getElementById("titleOfProduct").value
          var price = parseInt(document.getElementById("productPrice").value)
          var licenseDropdown = document.getElementById("custom-select")
          var license = licenseDropdown.options[licenseDropdown.selectedIndex].text
          var categoryDropdown = document.getElementById("custom-select2")
          var category = categoryDropdown.options[categoryDropdown.selectedIndex].text
          var format = document.querySelector('input[name="format"]:checked').value
          var delivery = null
          if (format === "Digital") {
              delivery = "null"
          } else {
            delivery = document.querySelector('input[name="delivery"]:checked').value
          }
          console.log(title)
          console.log(price)
          console.log(license)
          
          console.log(format)
          console.log(delivery)
          if (category === "Icons") {
            category = 1
          } else if (category === "Photography") {
            category = 2
          } else if (category === "Collectibles") {
            category = 3
          } else if (category === "Audio") {
            category = 4
          } else if (category === "Videos") {
            category = 5
          } else {
            category = 6
          }
          console.log(category)
          // add to product rating
          // problem
          console.log(this.numberOfProducts + 1)
          const reviewsRef = await setDoc(doc(db, "productratings", (this.numberOfProducts + 1).toString()), {
            date: [],
            description: [],
            num_stars: [],
            reviews: 0,
            user_id_buyer: [],
            user_id_seller: this.user.uid
            
          }) .then(() => console.log((reviewsRef)))
          // add to products
            const docRef = await setDoc(doc(db, "products", (this.numberOfProducts + 1).toString()), {
              caption: title, 
              category_id: category,
              coverimage: "null",
              description: "null",
              product_type: format,
              image1: "null",
              image2: "null",
              image3: "null",
              license: license,
              price: price,
              delivery: delivery,
              user_id: this.user.uid
            })
            .then(() => this.afterFunction())
            console.log(docRef)
        },
        async afterFunction() {
          // add entry under the user's listngs
          var today = new Date();
          var dateToday = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate()
            const ref = await updateDoc(doc(db, "userlistings", this.user.uid), {
              date: arrayUnion(dateToday),
              products: arrayUnion((this.numberOfProducts + 1).toString())
            })
            .then(() => function () {
              console.log(ref)
              })
            this.$emit('productNumber', this.numberOfProducts + 1) // new product number is total number of products + 1. pass this to parent

        },
        debug() { // debug
          var title = document.getElementById("titleOfProduct").value
          var price = (document.getElementById("productPrice").value).toString()
          var licenseDropdown = document.getElementById("custom-select")
          var license = licenseDropdown.options[licenseDropdown.selectedIndex].text
          var categoryDropdown = document.getElementById("custom-select2")
          var category = categoryDropdown.options[categoryDropdown.selectedIndex].text
          var format = document.querySelector('input[name="format"]:checked').value
          var delivery = document.querySelector('input[name="delivery"]:checked').value
          console.log(title)
          console.log(price)
          console.log(license)
          console.log(category)
          console.log(format)
          console.log(delivery)
        },
        printNumberOfProducts() { // debug
          this.findNumberOfProducts();
          console.log(this.numberOfProducts)
        },
        async findNumberOfProducts() { // find the next product ID to add in. stored in numberOfProducts
        let z = await getDocs(collection(db, "products")) 
        let count = 0
         z.forEach(() => {
           count+= 1;
         })
         this.numberOfProducts = count;
         console.log(this.numberOfProducts) // debug
      }, 
      isPhysical() {
        this.isPhysicalChecked = true
      },
      isDigital() {
        this.isPhysicalChecked = false
      }
    },
    emits: ["productNumber"], // used to pass productnumber to parent.
    mounted() {
      this.findNumberOfProducts();
      const auth = getAuth()
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.user = user
        }
      })
    },
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
#custom-select, #custom-select2 {
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
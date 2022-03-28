<template>
  <div id="banner-searchResults">
    <img src="@/assets/banner-Results.jpg" alt="Banner" class="img-fluid" />
  </div>
  <div class="row">
    <div class="col-md-4 offset-md-8"><SortByButton /></div>
  </div>

  <div class="container pt-3" div="details">
    <div class="row">
      <div class="col-lg-2">
        <FilterOptions />
      </div>
      <div class="col-lg-10">
        <div class="row">
          <div class="col mb-3">
            <ProductCard3
              :sellerName="sellerName"
              :productTitle="productTitle"
              :price="price"
              :coverImage="coverImage"
            />
          </div>
          <div class="col mb-3">
            <ProductCard3
              :sellerName="sellerName"
              :productTitle="productTitle"
              :price="price"
              :coverImage="coverImage"
            />
          </div>
          <div class="col mb-3">
            <ProductCard3
              :sellerName="sellerName"
              :productTitle="productTitle"
              :price="price"
              :coverImage="coverImage"
            />
          </div>
          <div class="col mb-3">
            <ProductCard3
              :sellerName="sellerName"
              :productTitle="productTitle"
              :price="price"
              :coverImage="coverImage"
            />
          </div>
        </div>
        <div class="row">
          <div class="col mb-3">
            <ProductCard3
              :sellerName="sellerName"
              :productTitle="productTitle"
              :price="price"
              :coverImage="coverImage"
            />
          </div>
          <div class="col mb-3">
            <ProductCard3
              :sellerName="sellerName"
              :productTitle="productTitle"
              :price="price"
              :coverImage="coverImage"
            />
          </div>
          <div class="col mb-3">
            <ProductCard3
              :sellerName="sellerName"
              :productTitle="productTitle"
              :price="price"
              :coverImage="coverImage"
            />
          </div>
          <div class="col mb-3"></div>
        </div>
      </div>
    </div>
  </div>
  <div></div>
</template>
<style>
.work-page {
  width: 80vmax;
  margin-left: auto;
}
#banner-searchResults img {
  width: 100%;
  height: 20vh;
}
</style>

<script>
import FilterOptions from "@/components/FilterOptions.vue";
import ProductCard3 from "@/components/ProductCard3.vue";
import SortByButton from "@/components/SortByButton.vue";
import firebaseApp from "../firebase.js";
import {
  getFirestore,
  getDocs,
  collection,
  //   doc,
  //   deleteDoc,
} from "firebase/firestore";

const db = getFirestore(firebaseApp);

export default {
  name: "App",
  components: {
    FilterOptions,
    ProductCard3,
    SortByButton,
  },
  mounted() {
    async function display() {
      let z = await getDocs(collection(db, "products"));

      //iterate across the docs
      z.forEach((docs) => {
        console.log(docs.data())
        //access the data in the docs
        let yy = docs.data();

        // //get the table reference
        // var table = document.getElementById("table");

        // //add a row and get the reference
        // var row = table.insertRow(ind);

        //get the details in the data base
        var ptitle = yy.caption;
        var price = yy.price;
        var sellerName = getUserId(yy.user_id);
        var image = yy.image1;

        // //create cells in the row and get the reference
        // var cell1 = row.insertCell(0);
        // var cell2 = row.insertCell(1);
        // var cell3 = row.insertCell(2);
        // var cell4 = row.insertCell(3);
        // var cell5 = row.insertCell(4);
        // var cell6 = row.insertCell(5);
        // var cell7 = row.insertCell(6);
        // var cell8 = row.insertCell(7);

        // //assign the reference
        // cell1.innerHTML = ind;
        // cell2.innerHTML = coin;
        // cell3.innerHTML = ticker;
        // cell4.innerHTML = price;
        // cell5.innerHTML = quantity;
        // cell6.innerHTML = 0;
        // cell7.innerHTML = 0;

        // cell7.className = "profits";

        // var bu = document.createElement("button");
        // bu.className = "bwt";
        // bu.id = String(coin);
        // bu.innerHTML = "Delete";
        // cell8.appendChild(bu);
      });
    }
    display();
    async function getUserId(user) {
        let x = await getDocs(collection(db, user));
        return x.data().display_name
      }
  },
  data() {
    return {
      productTitle: "Product Title",
      sellerName: "Seller Name",
      price: 0.0,
      coverImage: "@/assets/sample7.jpg", //doesnt work
    };
  },
  methods: {},
};
</script>

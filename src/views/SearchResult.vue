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
            <ProductCard3 :sellerName = "sellerName" :productTitle = "productTitle" :price = "price" :coverImage = "coverImage"/>
          </div>
          <div class="col mb-3">
            <ProductCard3 :sellerName = "sellerName" :productTitle = "productTitle" :price = "price" :coverImage = "coverImage"/>
          </div>
          <div class="col mb-3">
            <ProductCard3 :sellerName = "sellerName" :productTitle = "productTitle" :price = "price" :coverImage = "coverImage"/>
          </div>
          <div class="col mb-3">
            <ProductCard3 :sellerName = "sellerName" :productTitle = "productTitle" :price = "price" :coverImage = "coverImage"/>
          </div>
        </div>
        <div class="row">
          <div class="col mb-3">
            <ProductCard3 :sellerName = "sellerName" :productTitle = "productTitle" :price = "price" :coverImage = "coverImage"/>
          </div>
          <div class="col mb-3">
            <ProductCard3 :sellerName = "sellerName" :productTitle = "productTitle" :price = "price" :coverImage = "coverImage"/>
          </div>
          <div class="col mb-3">
            <ProductCard3 :sellerName = "sellerName" :productTitle = "productTitle" :price = "price" :coverImage = "coverImage"/>
          </div>
          <div class="col mb-3">
            <ProductCard3 :sellerName = "sellerName" :productTitle = "productTitle" :price = "price" :coverImage = "coverImage"/>
          </div>
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
//import firebaseApp from "../firebase.js";

// import {
//   getFirestore,
//   getDocs,
//   collection,
//   doc,
//   deleteDoc,
// } from "firebase/firestore";

//const db = getFirestore(firebaseApp);

export default {
  name: "App",
  components: {
    FilterOptions,
    ProductCard3,
    SortByButton,
  },
  data() {
    return{
      productTitle: "Product Title",
      sellerName: "Seller Name",
      price: 0.00,
      coverImage: "@/assets/sample7.jpg" //doesnt work
    }
  },
  methods: {},

  /*
  mounted() {
            z.forEach((docs) => {
          //access the data in the docs
          let yy = docs.data();

          //get the table reference
          var table = document.getElementById("table");

          //add a row and get the reference
          var row = table.insertRow(ind);

          //get the details in the data base
          var coin = yy.Coin;
          var price = yy.BuyPrice;
          var quantity = yy.BuyQuantity;
          var ticker = yy.Ticker;

          //create cells in the row and get the reference
          var cell1 = row.insertCell(0);
          var cell2 = row.insertCell(1);
          var cell3 = row.insertCell(2);
          var cell4 = row.insertCell(3);
          var cell5 = row.insertCell(4);
          var cell6 = row.insertCell(5);
          var cell7 = row.insertCell(6);
          var cell8 = row.insertCell(7);

          //assign the reference
          cell1.innerHTML = ind;
          cell2.innerHTML = coin;
          cell3.innerHTML = ticker;
          cell4.innerHTML = price;
          cell5.innerHTML = quantity;
          cell6.innerHTML = 0;
          cell7.innerHTML = 0;

          cell7.className = "profits";

          var bu = document.createElement("button");
          bu.className = "bwt";
          bu.id = String(coin);
          bu.innerHTML = "Delete";
          bu.onclick = function () {
            deleteinstrument2(coin);
          };
          cell8.appendChild(bu);

          val(ticker);

          // setInterval(()=>{
          //     val(ticker)
          // }, 2000)

          async function val(ticker) {
            let binance = new ccxt.binance();
            let x = await binance.fetch_ohlcv(ticker, "5m");
            cell6.innerHTML = x[499][4];
            cell7.innerHTML = Math.round(
              quantity * (-parseFloat(price) + parseFloat(cell6.innerHTML))
            );
            //calculating the sum of total profits
            tp = tp + parseFloat(cell7.innerHTML);

            //writing the total profit line at the bottom
            document.getElementById("totalProfit").innerHTML =
              "Total Profit is : $" + String(tp);
          }
          ind += 1;
        });
      }
      display();
  }
  */
};
</script>

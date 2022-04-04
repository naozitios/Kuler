<template>
  <div class="row justify-content-start">
    <div
      v-for="product in products"
      :key="product.id"
      style="width: 19vw"
      align="left"
    >
      <ProductCard3
        :sellerName="product.display_name"
        :productTitle="product.caption"
        :price="product.price"
        :coverImage="product.coverimage"
        :productNumber="product.id"
        :quantity="product.quantity"
        :timestamp="product.timestamp"
        align="left"
      />
    </div>
  </div>
</template>

<script>
import ProductCard3 from "@/components/ProductCard3.vue";
import firebaseApp from "@/firebase.js";
import {
  getFirestore,
  getDocs,
  collection,
  getDoc,
  doc,
  query,
  where,
  orderBy,
} from "firebase/firestore";

const db = getFirestore(firebaseApp);
export default {
  name: "App",
  components: {
    ProductCard3,
  },
  props: {
    category: Number,
    msg: String,
    profileID: String,
    userFavID: String,
    historyID: String,
    format: String,
    sort: Number,
  },
  watch: {
    format: function () {
      this.getProducts();
    },
    sort: function () {
      this.getProducts();
    },
  },
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    if (this.profileID) {
      this.getProfileProducts();
    } else if (this.userFavID) {
      this.getFavouriteProducts();
    } else if (this.historyID) {
      this.getHistoricalProducts();
    } else {
      this.getProducts();
    }
  },
  methods: {
    async getProducts() {
      this.products = [];
      let productsCollection;
      if (this.format == "") {
        //if there is no format to render
        if (this.category == 0) {
          if (this.isEmptyOrSpaces(this.msg)) {
            console.log("empty or undefined");
            productsCollection = query(collection(db, "products"));
          } else {
            console.log(this.msg);
            productsCollection = query(
              collection(db, "products"),
              where("caption", ">=", this.msg),
              where("caption", "<=", this.msg + "\uf8ff")
            );
          }
        } else {
          //if you want to show certain categories
          //add here
          productsCollection = query(
            collection(db, "products"),
            where("category_id", "==", this.category),
            orderBy("price")
          );
        }
      } else {
        //else add the format filter
        console.log(this.format);
        console.log(productsCollection.data());
        if (this.category == 0) {
          //if you want to show all
          if (this.isEmptyOrSpaces("text")) {
            //if there are empty spaces?
            console.log("empty or undefined");
            productsCollection = collection(db, "products");
          } else {
            //filter
            console.log(this.msg);
            productsCollection = query(
              collection(db, "products"),
              where("product_type", "==", this.format)
            );
          }
        } else {
          productsCollection = query(
            collection(db, "products"),
            where("category_id", "==", this.category),
            where("product_type", "==", this.format)
          );
        }
      }

      let selectedProducts = await getDocs(productsCollection);
      selectedProducts.forEach((product) => {
        let user_id = product.data().user_id;
        this.getUser(user_id).then((user) => {
          this.products.push({
            ...product.data(),
            ...user.data(),
            id: product.id,
          });
          if (this.sort == 1) {
            this.products.sort(function (a, b) {
              return a.price - b.price;
            });
          } else if (this.sort == 2) {
            this.products.sort(function (a, b) {
              return a.timestamp - b.timestamp;
            });
          } else {
            this.products.sort(function (a, b) {
              return a.id - b.id;
            });
          }
        });
      });
    },

    async getUser(user_id) {
      return await getDoc(doc(db, "users", user_id));
    },
    isEmptyOrSpaces(str) {
      return str === undefined || str.match(/^ *$/) !== null;
    },
    async getProfileProducts() {
      let productsCollection;
      if (this.category == 0 && this.format === "All") {
        // no filters applied
        productsCollection = query(
          collection(db, "products"),
          where("user_id", "==", this.profileID)
        );
      } else if (this.category != 0 && this.format === "All") {
        // ONLY category clicked
        productsCollection = query(
          collection(db, "products"),
          where("user_id", "==", this.profileID),
          where("category_id", "==", this.category)
        );
      } else if (this.category == 0 && this.format !== "All") {
        // ONLY format clicked
        productsCollection = query(
          collection(db, "products"),
          where("user_id", "==", this.profileID),
          where("product_type", "==", this.format)
        );
      } else {
        // both filters triggered
        productsCollection = query(
          collection(db, "products"),
          where("user_id", "==", this.profileID),
          where("category_id", "==", this.category),
          where("product_type", "==", this.format)
        );
      }
      let selectedProducts = await getDocs(productsCollection);
      selectedProducts.forEach((product) => {
        let user_id = product.data().user_id;
        this.getUser(user_id).then((user) => {
          this.products.push({
            ...product.data(),
            ...user.data(),
            id: product.id,
          });
        });
      });
    },

    async getFavouriteProducts() {
      const favouriteRef = doc(db, "userfavourites", this.userFavID);
      const favouriteRefData = await getDoc(favouriteRef);
      const favouriteData = favouriteRefData.data();
      const arrayOfProducts = favouriteData.products;
      arrayOfProducts.forEach(async (productIndex) => {
        let product = await getDoc(doc(db, "products", productIndex));
        let productFormat = product.data().product_type;
        let productCategory = product.data().category_id;
        let toAdd = false;
        toAdd = this.toAssign(productFormat, productCategory);
        if (toAdd == true) {
          this.getUser(this.userFavID).then((user) => {
            this.products.push({
              ...product.data(),
              ...user.data(),
              id: product.id,
            });
          });
        }
      });
    },

    async getHistoricalProducts() {
      const docRef = doc(db, "users", this.historyID);
      const historyDocs = await getDocs(collection(docRef, "purchaseHistory"));
      historyDocs.forEach(async (docs) => {
        let productData = docs.data();
        let productPurchases = productData.purchases;
        var date = new Date(productData.timestamp.toDate());
        var date2 = date.toString().split(" ");
        date2 = date2.slice(0, 5);
        Object.keys(productPurchases).forEach(async (key) => {
          let actualProduct = await getDoc(doc(db, "products", key));
          let productFormat = actualProduct.data().product_type;
          let productCategory = actualProduct.data().category_id;
          let toAdd = false;
          toAdd = this.toAssign(productFormat, productCategory);
          if (toAdd == true) {
            this.getUser(this.historyID).then((user) => {
              this.products.push({
                ...actualProduct.data(),
                ...user.data(),
                id: actualProduct.id,
                quantity: productPurchases[key],
                timestamp: date2.join(" "),
              });
            });
          }
        });
      });
    },

    toAssign(productFormat, productCategory) {
      if (this.category == 0 && this.format === "All") {
        return true;
      } else if (this.category == 0 && this.format !== "All") {
        // if format is chosen
        if (productFormat === this.format) {
          return true;
        }
      } else if (this.category != 0 && this.format === "All") {
        if (productCategory == this.category) {
          return true;
        }
      } else {
        if (productCategory == this.category && productFormat === this.format) {
          return true;
        }
      }
    },
  },
};
</script>

<style scoped>
</style>
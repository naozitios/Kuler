<template>
    <div class="container">
        <div class="row">
          <div class="col-sm-4">
              <div style="width: 7rem;" class="productImg">
                  <img class="card-img-top" :src="product_cover" @click="goToProduct()" style="height: 7rem;">
              </div>
          </div>
          <div class="col-sm-7">
            <h4 class="card-title">{{this.product_title}}</h4>
            <h4 class="card-title">SGD {{this.price}}</h4>  
            <div class = "counter">
              <span class="minus" @click="subtract" v-if="editable">-</span>
              <span class="viewOnly" v-else>-</span>
              <div class="num">{{this.qty}}</div>
              <span class="plus" @click="add" v-if="editable">+</span>
              <span class="viewOnly" v-else>+</span>
            </div>
            
          </div>
        </div>
    </div>
    <br>
</template>


<script>
import firebaseApp from "@/firebase.js";
import { getFirestore, doc, getDoc, updateDoc} from "firebase/firestore";
const db = getFirestore(firebaseApp);
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
  name: "ProductCard2",
  components: {},
  data() {
    return {
      qty: 1,
      price: 0,
      product_title: "",
      product_cover: null,
      user: null
    }
  },
  props: {
    editable: Boolean,
    product: Object,
    product_id: String
  },
  mounted() {
    const auth = getAuth()
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.user = user
          }
        })
    this.getData()
    
  },
  emits:['addSubtract'],

  methods: {
    getData() {
      this.product_title = this.product.caption
      this.price = this.product.price
      this.qty = this.product.qty
      this.product_cover = this.product.coverimage
    },
    
    async add() {
      this.qty += 1;
      const userRef = await getDoc(doc(db, "usershoppingcarts", this.user.uid))
      var mappings = (userRef.data()).products
      mappings[this.product_id] += 1
      await updateDoc(doc(db, "usershoppingcarts", this.user.uid), {
        products: mappings
      })
      this.$emit('addSubtract')
    },
    async subtract() {
      if (this.qty > 1) {
        this.qty -= 1;
        const userRef = await getDoc(doc(db, "usershoppingcarts", this.user.uid))
        var mappings = (userRef.data()).products
        mappings[this.product_id] -= 1
        await updateDoc(doc(db, "usershoppingcarts", this.user.uid), {
          products: mappings
        })
      } else {
        var check = confirm("Are you sure you want to remove this product?")
        if (check == true) {
          const userRef = await getDoc(doc(db, "usershoppingcarts", this.user.uid))
          var mappings2 = (userRef.data()).products
          delete mappings2[this.product_id]
          await updateDoc(doc(db, "usershoppingcarts", this.user.uid), {
          products: mappings2
        })
        }
      }
      this.$emit('addSubtract')
    },
    goToProduct() {
      this.$router.push({name: "Product Page", params: {id: this.product_id}})
    }
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
.productImg:hover,
.productLink:hover,
.sellerLink:hover {
  opacity: 0.8;
  transition: 0.5s ease;
  cursor: pointer;
}
.productLink {
  color: rgb(0, 0, 0);
}
.sellerLink {
  color: #3a3d3b;
}
.card-title {
  text-align: left;
  font-size: 90%;
  font-weight: bold;
}
.seller-name {
  color: #3a3d3b;
  text-align: left;
  font-size: 60%;
  font-weight: bold;
}
.counter {
  margin-top: 20%;
}

span {
  cursor:pointer;
}

.minus, .plus, .viewOnly {
	width:30%;
  height:30%;
  background:#F37381;
  padding:0px 2px 2px 2px;
  vertical-align: middle;
  text-align: center;
  float: left;
  color: white;
}

.minus:hover, .plus:hover {
  box-shadow: inset 0 0 20px rgba(255, 255, 255, .5), 0 0 20px rgba(255, 255, 255, .2);
  outline-color: rgba(255, 255, 255, 0);
  outline-offset: 15px;
  text-shadow: 1px 1px 2px #427388;
}

.viewOnly {
  background: rgb(202, 202, 202);
  cursor: default;
}

.num {
  border: 1px solid #F37381;
  display: inline;
  float:left;
  width:30%;
}

.counter {
  width: 50%;
  float: left;
}

.col-sm-7 {
  height: 30%;
  margin-left: 5%;
}
</style>
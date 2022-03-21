<template>
    <div class="container">
        <div class="row">
          <div class="col-sm-4">
              <div style="width: 8rem;">
                  <a href="#" class="productImg"><img class="card-img-top" src="@/assets/sample7.jpg"></a>
              </div>
          </div>
          <div class="col-sm-7">
            <h4 class="card-title">Product Title</h4>
            <h4 class="card-title">SGD 0.00</h4>  
            <div class = "counter">
              <span class="minus" @click="subtract">-</span>
              <div class="num">{{num}}</div>
              <span class="plus" @click="add">+</span>
            </div>
            
          </div>
        </div>
    </div>
    <br>
</template>

<script>
export default {
  name: "ProductCard2",
  components: {},
  data() {
    return {
      num: 1
    }
  },
  methods: {
    add() {
      this.num += 1;
    },
    subtract() {
      if (this.num > 0) {
        this.num -= 1;
      }
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

.minus, .plus {
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
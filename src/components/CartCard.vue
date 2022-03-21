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
            </div>
        </div>
    </div>
    <br>
</template>

<script>
export default {
  name: "ProductCard2",
  components: {},
  data() {},
  methods: {},
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
.conatiner {
  width: 15rem;
}
</style>
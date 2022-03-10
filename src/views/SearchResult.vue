<template>
  <div class="banner" id="banner-home">
    <ProductScroll/>
    <img
      src="https://images.unsplash.com/photo-1533481051286-d6396b74c877?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1691&q=80"
      class="img-fluid"
      alt="..."
    />
  </div>
  <!--buggy sortbybutton that has to be fixed-->
  <div>
    <h2>
      Hi my name is NOah
    </h2>
  </div>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="card" style="width: 18rem">
          <img src="https://images.unsplash.com/photo-1533481051286-d6396b74c877?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1691&q=80" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card" style="width: 18rem">
          <img src="https://images.unsplash.com/photo-1533481051286-d6396b74c877?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1691&q=80" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card" style="width: 18rem">
          <img src="https://images.unsplash.com/photo-1533481051286-d6396b74c877?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1691&q=80" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.work-page {
  width: 80vmax;
  margin-left: auto;
}
#banner-home {
  height: 200px;
  width: 100vw;
  margin-left: auto;
  margin-right: auto;
}
</style>

<script>
import ProductScroll from '@/components/ProductScroll.vue'

export default {
  name: 'App',
  components:{
    ProductScroll,
  },
  data(){
    
  },
  methods:{
   
  }
}
</script>

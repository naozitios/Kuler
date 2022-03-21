<template>
    <div id = "section-main">
        <h5 id = "section-title">Reviews&nbsp;<StarRating/></h5>
        <!--Page 1-->
        <div class = "page" v-if="p1">
        <!-- reviewers -->
        <div id= "reviewer">
            Andrew Wong &nbsp;&nbsp;13/2/22&nbsp;&nbsp;<StarRating/><!--change name to DB-->
        </div>
        <div id= "product-text"> 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis aliquam cursus.
          Aenean tortor odio, maximus at nisi in, 
          condimentum convallis ex. Nunc eu justo efficitur lectus iaculis maximus id sed lorem. 
        </div>
        <div id= "reviewer">
            Noah Teo &nbsp;&nbsp;25/2/22&nbsp;&nbsp;<StarRating/><!--change name to DB-->
        </div>
        <div id= "product-text"> 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis aliquam cursus.
          Aenean tortor odio, maximus at nisi in, 
          condimentum convallis ex. Nunc eu justo efficitur lectus iaculis maximus id sed lorem. 
        </div>
        <div id= "reviewer">
            Xiang Han &nbsp;&nbsp;25/2/22&nbsp;&nbsp;<StarRating/><!--change name to DB-->
        </div>
        <div id= "product-text"> 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis aliquam cursus.
          Aenean tortor odio, maximus at nisi in, 
          condimentum convallis ex. Nunc eu justo efficitur lectus iaculis maximus id sed lorem. 
        </div>
        <div id= "reviewer">
            Martin &nbsp;&nbsp;25/2/22&nbsp;&nbsp;<StarRating/><!--change name to DB-->
        </div>
        <div id= "product-text"> 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis aliquam cursus.
          Aenean tortor odio, maximus at nisi in, 
          condimentum convallis ex. Nunc eu justo efficitur lectus iaculis maximus id sed lorem. 
        </div>
        <div id= "reviewer">
            Jia Jun &nbsp;&nbsp;25/2/22&nbsp;&nbsp;<StarRating/><!--change name to DB-->
        </div>
        <div id= "product-text"> 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis aliquam cursus.
          Aenean tortor odio, maximus at nisi in, 
          condimentum convallis ex. Nunc eu justo efficitur lectus iaculis maximus id sed lorem. 
        </div>
        <div id= "reviewer">
            Shashank &nbsp;&nbsp;25/2/22&nbsp;&nbsp;<StarRating/><!--change name to DB-->
        </div>
        <div id= "product-text"> 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis aliquam cursus.
          Aenean tortor odio, maximus at nisi in, 
          condimentum convallis ex. Nunc eu justo efficitur lectus iaculis maximus id sed lorem. 
        </div>
        </div>
        <div class = "page" v-show="p2">2</div>
        <div class = "page" v-show="p3">3</div>
        <div class = "page" v-show="p4">4</div>
        <div class = "page" v-show="p5">5</div>
        <div class = "page" v-show="p6">6</div>
      <div class= "pagination">
        <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li class="page-item"><a class="page-link" href="#" aria-selected="true" v-on:click="setP1True()">1</a></li>
    <li class="page-item"><a class="page-link" href="#" aria-selected="false" v-on:click="setP2True()">2</a></li>
    <li class="page-item"><a class="page-link" href="#" aria-selected="false" v-on:click="setP3True()">3</a></li>
    <li class="page-item"><a class="page-link" href="#" aria-selected="false" v-on:click="setP4True()">4</a></li>
    <li class="page-item"><a class="page-link" href="#" aria-selected="false" v-on:click="setP5True()">5</a></li>
    <li class="page-item"><a class="page-link" href="#" aria-selected="false" v-on:click="setP6True()">6</a></li>
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>  
        </div>
    </div>
    
    
</template>

<script>
import StarRating from '@/components/StarRating.vue'


export default {
    name: 'Reviews',
    components:{
    StarRating
  },
  data(){
    return {
        p1:true,
        p2:false,
        p3:false,
        p4:false,
        p5:false,
        p6:false
    }
  },
  methods:{
      setP1True() {
          this.p1 = true,
          this.p2 = false,
          this.p3 = false,
          this.p4 = false,
          this.p5 = false,
          this.p6 = false
      },
      setP2True() {
          this.p1 = false,
          this.p2 = true,
          this.p3 = false,
          this.p4 = false,
          this.p5 = false,
          this.p6 = false
      },
      setP3True() {
          this.p1 = false,
          this.p2 = false,
          this.p3 = true,
          this.p4 = false,
          this.p5 = false,
          this.p6 = false
      },
      setP4True() {
          this.p1 = false,
          this.p2 = false,
          this.p3 = false,
          this.p4 = true,
          this.p5 = false,
          this.p6 = false
      },
      setP5True() {
          this.p1 = false,
          this.p2 = false,
          this.p3 = false,
          this.p4 = false,
          this.p5 = true,
          this.p6 = false
      },
      setP6True() {
          this.p1 = false,
          this.p2 = false,
          this.p3 = false,
          this.p4 = false,
          this.p5 = false,
          this.p6 = true
      },

  }
}
</script>

<style scoped>
#section-main {
    padding: 5em 2em 1em 2em;
    background-color: #F7F0DD;
}
#section-main #section-title{
    font-weight: 900;
    text-align: left;
    display: flex;
}
#reviewer{
    padding-top:2em;
    display:flex;
}
#product-text{
    display:flex;
}
.pagination{
    display:flex;
}


</style>
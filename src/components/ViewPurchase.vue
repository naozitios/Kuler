<template>
<div class="scroll">
    <CartCard :editable = 'editable'/>
    <CartCard :editable = 'editable'/>
    <CartCard :editable = 'editable'/>
    <CartCard :editable = 'editable'/>
    <CartCard :editable = 'editable'/>
    <CartCard :editable = 'editable'/>
</div>
<div class="details">
<v-row align="left">
      <hr />
      <div class="row">
        <div class="col-sm-8"><h5>Subtotal</h5></div>
        <div class="col-sm-4"><h5>SGD XXX</h5></div>
      </div>
    </v-row>
    <hr />
    <v-row align="left">
      <div class="row">
      <div class="col-sm-8"><h4>Total</h4></div>
      <div class="col-sm-4"><h5>SGD XXX</h5></div>
      </div>
    </v-row>
    </div>
</template>
<script>
import CartCard from "@/components/CartCard.vue"

export default {
    name: 'ViewPurchase',
    components:{
        CartCard
  },
  props: {
      editable: Boolean
  },
  data(){
    
  },
  methods:{
   
  }
}
</script>

<style scoped>
.scroll {
    width: 22rem;

  height: 30vmax;
  overflow-y: scroll;
}
.details {
    float: bottom;
}
</style>


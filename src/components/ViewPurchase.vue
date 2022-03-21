<template>
<div class="scroll">
    <CartCard/>
    <CartCard/>
    <CartCard/>
    <CartCard/>
    <CartCard/>
    <CartCard/>
</div>
</template>
<script>
import CartCard from "@/components/CartCard.vue"

export default {
    name: 'ViewPurchase',
    components:{
        CartCard
  },
  data(){
    
  },
  methods:{
   
  }
}
</script>

<style scoped>
.scroll {
    overflow-y: scroll;
    width: 20rem;
}
</style>


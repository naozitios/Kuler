<template>
    <div class = "listings">
        <ProductCard/>
    </div>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue'
export default {
    name: 'Listings',
    components: {
        ProductCard
    }
}
</script>

<style scoped>
.listings {
    margin-top: 5%;
}
</style>
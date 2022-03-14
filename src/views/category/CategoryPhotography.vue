<template>
    <FilterOptions/>
    <SortByButton/>
    <Listings/>
</template>

<script>
import FilterOptions from '@/components/FilterOptions.vue'
import SortByButton from '@/components/SortByButton.vue'
import Listings from '@/components/Listings.vue'

export default {
    components: {
        FilterOptions,
        SortByButton,
        Listings
    }
}
</script>

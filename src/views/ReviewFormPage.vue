<template>
    <div class = "big-container">
        <ReviewForm :productID = "productID"/>
    </div>
</template>

<script>
import ReviewForm from '@/components/ReviewForm.vue'

export default {
   name: 'ReviewFormPage',
   components: {
       ReviewForm
   },
   data() {
       return {
           productID: String
       }
   }
}
</script>

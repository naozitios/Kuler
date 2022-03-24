<template>
<div class = "success">
    <PaymentSuccess/>
    <BrowseButton/>
</div>
<FooterMain/>
</template>

<script>
import FooterMain from "@/components/footer_components/FooterMain.vue"
import PaymentSuccess from "@/components/PaymentSuccess.vue"
import BrowseButton from "@/components/BrowseButton.vue"

export default {
    components: {
        FooterMain,
        PaymentSuccess,
        BrowseButton
    }

}
</script>

<style scoped>
.success {
    margin-top: 5%;
    margin-bottom: 5%;
}
</style>
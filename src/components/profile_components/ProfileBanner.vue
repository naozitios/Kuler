<template>
    <div class="banner" id="banner-home">
        <img src="@/assets/profile_banner.jpg" alt="Banner">
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    /*banner*/
    .banner {
        display: flex;
        flex-direction: column;
        /* width: 100%; */
        max-height:40vh;
        object-fit: contain;
        object-position: center; /* Center the image within the element */
        /* min-height: 50vh; */
    }

    .banner img {
        /* width: 100%; */
        object-fit: cover; /* Do not scale the image */
        object-position: center; /* Center the image within the element */
        transform: translateY(-50%);
        /* max-height:100%;
        max-width:100%; */

    }

</style>


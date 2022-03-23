<template>
    <div class = "heart">
  <img v-if="image" :key="image.id" @click="switchImage" class="image" :src="image.src" alt="image.alt">
  </div>
</template>

<script>
export default {
    data() { 
       return {
           index: 0, // pass information from parent in order to fix the index. 1 for heart, 0 for normal
           image: null,
           images: [{
               id: 1,
               src: 'https://cdn1.iconfinder.com/data/icons/circle-outlines/512/Like_Favourite_Love_Health_Heart_Favourites_Favorite-1024.png',
               alt: "White Heart"
           },
           { 
               id: 2,
               src: "https://cdn1.iconfinder.com/data/icons/circle-outlines-colored/512/Like_Favourite_Love_Health_Heart_Favourites_Favorite-512.png",
               alt: "Red heart"
           }
           ]
       } 
    },
    mounted() {
        this.switchImage();
    },
    methods: {
        switchImage() {
            this.image = this.images[this.index];
            this.index = (this.index + 1) % this.images.length;
        }
    }
}
</script>

<style scoped>
img {
    max-width: 25%;
    max-height: 2
    5%;
}
</style>
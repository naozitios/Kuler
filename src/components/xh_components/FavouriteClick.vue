<template>
    <div class = "heart">
  <img v-if="image" :key="image.id" @click="switchImage" class="image" :src="image.src" alt="image.alt">
  </div>
</template>

<script>
import {getAuth, onAuthStateChanged} from "firebase/auth";
export default {
    data() { 
       return {
           index: 0, // pass information from DB in order to fix the index. 1 for heart, 0 for normal
           image: null,
           user: false,
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
        this.instantiateImage();
        const auth = getAuth();
        onAuthStateChanged(auth, (user) =>  {
            if (user) {
                this.user = user;
            }
        })
    },
    methods: {
        switchImage() {
            if (this.user) {
                this.image = this.images[this.index];
                this.index = (this.index + 1) % this.images.length; // change in DB as well.
            } else {
                this.$router.push({name: "Frequently Asked Questions"})
                // throw to log in page
                // change
            }
        },
        instantiateImage() {
            this.image = this.images[this.index]
        }
    }
}
</script>

<style scoped>
img {
    width: 75px;
    height: auto;
    cursor: pointer
}
</style>
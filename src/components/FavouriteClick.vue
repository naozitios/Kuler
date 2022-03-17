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
               src: 'https://cdn.icon-icons.com/icons2/2819/PNG/512/love_heart_favourite_icon_179532.png',
               alt: "xd"
           },
           { 
               id: 2,
               src: "https://cdn.icon-icons.com/icons2/2640/PNG/512/heart_favourite_love_like_icon_159300.png",
               alt: "xd"
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
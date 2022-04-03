<template>
    <div class = "heart">
  <img v-if="image" :key="image.id" @click="switchImage" class="image" :src="image.src" alt="image.alt">
  </div>
</template>

<script>
import {getAuth, onAuthStateChanged} from "firebase/auth";
import firebaseApp from '../../firebase.js';
import {getFirestore} from "firebase/firestore";
import { getDoc, doc, updateDoc, arrayUnion, arrayRemove} from "firebase/firestore";
const db = getFirestore(firebaseApp);

export default {
    data() { 
       return {
           index: null, // pass information from DB in order to fix the index. 1 for heart, 0 for normal
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
        const auth = getAuth();
        onAuthStateChanged(auth, (user) =>  {
            if (user) {
                this.user = user;
                this.instantiateImage();
            } else {
                this.instantiateImage();
            }
        })
        
    },

    props: {
        productNumber: String
    },
    methods: {
        async switchImage() {
            if (this.user) {
                this.index = (this.index + 1) % this.images.length; // change in DB as well.
                this.image = this.images[this.index];
                const ref = doc(db, "userfavourites", this.user.uid)
                const document = await getDoc(ref)
                const documentData = document.data()

                // date
                var today = new Date();
                var todaysDate = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();


                if (this.index == 0) { // index is 0, means we need to remove from favourites
                    // remove productID from user's userfavourites
                    var index = documentData.products.indexOf(this.productNumber)
                    var newArrayOfDates = documentData.date
                    newArrayOfDates.splice(index, 1)
                    console.log(newArrayOfDates)
                    console.log(index)
                    await updateDoc((ref), {
                        date: newArrayOfDates,
                        products: arrayRemove(this.productNumber)
                    })
                    .then(console.log("PRODUCT REMOVED FROM FAVS"))
                } else { // index = 1, means we add 
                    var arrayOfDates = documentData.date
                    arrayOfDates.push(todaysDate)
                    await updateDoc((ref),  {
                        products: arrayUnion(this.productNumber),
                        date: arrayOfDates
                    })
                    .then(console.log("PRODUCT ADDED INTO FAVS"))
                }
            } else {
                alert("Please log in. You can only add products to favourites after you have logged in.")
                this.$router.push({name: "Login"})
            }
        },
        async instantiateImage() {
            if (!this.user) {
                this.index = 0; // show guest users the white heart
                this.image = this.images[this.index]
            } else {
                // check if it has been favourited, if it is then change index to 1.
                const favouritesRef = await doc(db, "userfavourites", this.user.uid)
                const favouriteDocSnap = await getDoc(favouritesRef)
                const favData = favouriteDocSnap.data()
                if (favData.products.includes(this.productNumber)) {
                    this.index = 1;
                } else {
                    this.index = 0;
                }
                this.image = this.images[this.index]
            }

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
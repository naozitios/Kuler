<template>
    <div class = "leave-review">
        <form id = "myform">
        <label for= "leaveAReview">Leave a Review</label>
        <br>
        <span class="star-rating" id="star-rating">
        <input type="radio" name="rating1" value="0.5" checked><i></i>
        <input type="radio" name="rating1" value="1"><i></i>
        <input type="radio" name="rating1" value="1.5"><i></i>
        <input type="radio" name="rating1" value="2"><i></i>
        <input type="radio" name="rating1" value="2.5"><i></i>
        <input type="radio" name="rating1" value="3"><i></i>
        <input type="radio" name="rating1" value="3.5"><i></i>
        <input type="radio" name="rating1" value="4"><i></i>
        <input type="radio" name="rating1" value="4.5"><i></i>
        <input type="radio" name="rating1" value="5"><i></i>
        </span>
        <br>
        <br>
        <textarea class="form-control" id = "reviewForm" rows="10"></textarea>
        <div class = "listButton">
        <button class="btn btn-primary" id = "listButton" type="button" @click="addReview"><h3>Leave Review</h3></button>
  </div>
  </form>
    </div>
    
</template>

<script>
import firebaseApp from '../firebase.js';
import {getFirestore} from "firebase/firestore";
const db = getFirestore(firebaseApp);
import {getAuth, onAuthStateChanged} from "firebase/auth";
import {arrayUnion, doc, updateDoc, increment, getDoc} from "firebase/firestore";



export default {
    name: 'App',
    
    data() {
        return {
            user: false,
            
            
            
        }
    },
    props: {
      productID:String
    },
    mounted() {
        const auth = getAuth()
        onAuthStateChanged(auth, (user) => { 
            if (user) {
                this.user = user
            }
        })
    },

    
    methods: {
        async addReview() {
            var stars = parseInt(document.querySelector('input[name="rating1"]:checked').value)
            var description = document.getElementById("reviewForm").value
            console.log(stars)
            console.log(description)
            console.log(this.productID)
            var today = new Date();
            var dateToday = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate()
            const ref = await getDoc(doc(db, "productratings", this.productID))
            const refData = ref.data()
            var dateArray = refData.date
            dateArray.push(dateToday)
            var starArray = refData.num_stars
            starArray.push(stars)
            var descriptionArray = refData.description
            descriptionArray.push(description)
            const reviewsRef = await updateDoc(doc(db, "productratings", this.productID), {
                date: dateArray,
                description: descriptionArray,
                num_stars: starArray,
                reviews: increment(1),
                user_id_buyer: arrayUnion(this.user.uid)
            }) .then(() => console.log(reviewsRef)).then(()=> this.$router.push({name: "Purchase History", params: {id: this.user.uid}}))
            alert("You have successfully left a review!")
            
            return false


        }
        
    }
    
}
</script>

<style scoped>
    @import url(https://fonts.googleapis.com/css?family=Open+Sans);
    #app {
        font-family: 'Open Sans', Verdana, Geneva, Tahoma, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    

    #reviewForm {
        background-color: lightgray;
        border-radius: 20px 20px 20px 20px;
        width: 50%;
        margin-left: 25%;
        margin-bottom: 3%;
    }
    .star-rating {
    margin: 25px 0 0px;
    font-size: 0;
    white-space: nowrap;
    display: inline-block;
    width: 175px;
    height: 35px;
    overflow: hidden;
    position: relative;
    background: url('data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDIwIDIwIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cG9seWdvbiBmaWxsPSIjREREREREIiBwb2ludHM9IjEwLDAgMTMuMDksNi41ODMgMjAsNy42MzkgMTUsMTIuNzY0IDE2LjE4LDIwIDEwLDE2LjU4MyAzLjgyLDIwIDUsMTIuNzY0IDAsNy42MzkgNi45MSw2LjU4MyAiLz48L3N2Zz4=');
    background-size: contain;
    }
    .star-rating i {
  opacity: 0;
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 10%;
  z-index: 1;
  background: url('data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDIwIDIwIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cG9seWdvbiBmaWxsPSIjRkZERjg4IiBwb2ludHM9IjEwLDAgMTMuMDksNi41ODMgMjAsNy42MzkgMTUsMTIuNzY0IDE2LjE4LDIwIDEwLDE2LjU4MyAzLjgyLDIwIDUsMTIuNzY0IDAsNy42MzkgNi45MSw2LjU4MyAiLz48L3N2Zz4=');
  background-size: 35px auto;
}
.star-rating input {
  -moz-appearance: none;
  -webkit-appearance: none;
  opacity: 0;
  display: inline-block;
  width: 10%;
  height: 100%;
  margin: 0;
  padding: 0;
  z-index: 2;
  position: relative;
}
.star-rating input:hover + i ,
.star-rating input:checked + i {
  opacity: 1;
}


.star-rating i ~ i {
  width: 20%;
}
.star-rating i ~ i ~ i {
  width: 30%;
}
.star-rating i ~ i ~ i ~ i {
  width: 40%;
}
.star-rating i ~ i ~ i ~ i ~ i {
  width: 50%;
}
.star-rating i ~ i ~ i ~ i ~ i ~ i{
  width: 60%;
}
.star-rating i ~ i ~ i ~ i ~ i ~ i ~ i {
  width: 70%;
}
.star-rating i ~ i ~ i ~ i ~ i ~ i ~ i ~ i{
  width: 80%;
}
.star-rating i ~ i ~ i ~ i ~ i ~ i ~ i ~ i ~ i{
  width: 90%;
}
.star-rating i ~ i ~ i ~ i ~ i ~ i ~ i ~ i ~ i ~ i{
  width: 100%;
}
.btn.btn-primary {
      width: 15%;
  position: relative;
  display: inline-block;
  margin: 1em;
  padding: 1em 2em;
  border: 0;
  border-radius: 30px;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  font-size: 10px;
  color: white;
  font-weight: bold;
  background-color: #F37381;
}

</style>
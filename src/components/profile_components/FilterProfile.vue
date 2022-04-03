<template>
    <div class = "filterContainer">
        <div class = "filterFormat">
            <form>
                <p class = "filterTitle">Format</p>
                <label class="container">All
                <input type="radio" checked="checked" name="filterFormat" @click="filterFormat('All')" value = "all">
                <span class="checkmark"></span>
                </label>
                <label class="container">Digital Only
                <input type="radio" name="filterFormat" value = "digitalOnly" @click="filterFormat('Digital')" >
                <span class="checkmark"></span>
                </label>
                <label class="container">Physical Only
                <input type="radio" name="filterFormat" value = "physical Only" @click="filterFormat('Physical')">
                <span class="checkmark"></span>
                </label>
            </form>
        </div>
        <div class = "filterCategory">
            <form>
                <p class = "filterTitle">Category</p>
                <label class="container">All
                <input type="radio" name="filterCategory" value = "CategoryAll" @click="filterBy(0)" id = "categoryAll"> 
                <span class="checkmark"></span>
                </label>
                <label class="container">Icons
                <input type="radio" name="filterCategory" value = "Category Icons" @click="filterBy(1)" id = "categoryIcons">
                <span class="checkmark"></span>
                </label>
                <label class="container">Photography
                <input type="radio" name="filterCategory" value = "Category Photography" @click="filterBy(2)" id = "categoryPhotography">
                <span class="checkmark"></span>
                </label>
                <label class="container">Collectibles
                <input type="radio" name="filterCategory" value = "Category Collectibles" @click="filterBy(3)" id = "categoryCollectibles">
                <span class="checkmark"></span>
                </label>
                <label class="container">Audio
                <input type="radio" name="filterCategory" value = "Category Audio" @click="filterBy(4)" id = "categoryAudio">
                <span class="checkmark"></span>
                </label>
                <label class="container">Videos
                <input type="radio" name="filterCategory" value = "Category Videos" @click="filterBy(5)" id = "categoryVideos">
                <span class="checkmark"></span>
                </label>
                <label class="container">Vintage
                <input type="radio" name="filterCategory" value = "Category Vintage" @click="filterBy(6)" id = "categoryVintage">
                <span class="checkmark"></span>
                </label>
            </form>
        </div>
    </div>
</template>
<script>
export default {
  methods: {
    filterBy(category) {
        this.category = category
        this.$emit('changeCategory', this.category)
    },
    filterFormat(format) {
        this.format = format
        this.$emit('changeFormat', this.format)
    }
    
  },

  data() {
    return {
      category: 0,
      format: "All"
    }
  },
  mounted() {
    document.getElementById("categoryAll").checked = true;
  }
}
</script>

<style scoped>
.filterContainer {
    float:left;
    width: 18%;
    text-align: left;
    padding-left: 5%;
}
.filterTitle {
    font-weight: bold;
    margin-bottom: 2%;
    font-size: 150%;
}
.form {
    padding: 2%
}
/* The container */
.container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 2%;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default radio button */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

/* Create a custom radio button */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  border-radius: 50%;
  border: 2px solid #f37381;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: #fcd4d8;
}

/* When the radio button is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: white;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the indicator (dot/circle) */
.container .checkmark:after {
  top: 3px;
  left: 3px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: #f37381;
}
</style>
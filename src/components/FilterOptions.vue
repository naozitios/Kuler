<template>
  <div class="filterContainer">
    <div class="filterFormat">
      <form>
        <p class="filterTitle">Format</p>
        <label class="container"
          >All
          <input
            type="radio"
            checked="checked"
            name="filterFormat"
            value="all"
            @click="showall"
          />
          <span class="checkmark"></span>
        </label>
        <label class="container"
          >Digital Only
          <input
            type="radio"
            name="filterFormat"
            value="digitalOnly"
            @click="showdigital"
          />
          <span class="checkmark"></span>
        </label>
        <label class="container"
          >Physical Only
          <input
            type="radio"
            name="filterFormat"
            value="physical Only"
            @click="showphysical"
          />
          <span class="checkmark"></span>
        </label>
      </form>
    </div>
    <div class="filterCategory">
      <form>
        <p class="filterTitle">Category</p>
        <label class="container"
          >All
          <input
            type="radio"
            name="filterCategory"
            value="CategoryAll"
            @click="goToAll"
            id="categoryAll"
          />
          <span class="checkmark"></span>
        </label>
        <label class="container"
          >Icons
          <input
            type="radio"
            name="filterCategory"
            value="Category Icons"
            @click="goToIcons"
            id="categoryIcons"
          />
          <span class="checkmark"></span>
        </label>
        <label class="container"
          >Photography
          <input
            type="radio"
            name="filterCategory"
            value="Category Photography"
            @click="goToPhotography"
            id="categoryPhotography"
          />
          <span class="checkmark"></span>
        </label>
        <label class="container"
          >Collectibles
          <input
            type="radio"
            name="filterCategory"
            value="Category Collectibles"
            @click="goToCollectibles"
            id="categoryCollectibles"
          />
          <span class="checkmark"></span>
        </label>
        <label class="container"
          >Audio
          <input
            type="radio"
            name="filterCategory"
            value="Category Audio"
            @click="goToAudio"
            id="categoryAudio"
          />
          <span class="checkmark"></span>
        </label>
        <label class="container"
          >Videos
          <input
            type="radio"
            name="filterCategory"
            value="Category Videos"
            @click="goToVideos"
            id="categoryVideos"
          />
          <span class="checkmark"></span>
        </label>
        <label class="container"
          >Vintage
          <input
            type="radio"
            name="filterCategory"
            value="Category Vintage"
            @click="goToVintage"
            id="categoryVintage"
          />
          <span class="checkmark"></span>
        </label>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  emits: ["showall", "showdigital", "showphysical"],

  methods: {
    goToVintage() {
      this.status = "Category Vintage";
      document.getElementById("categoryAll").checked = true;
    },
    goToVideos() {
      this.status = "Category Videos";
    },
    goToAudio() {
      this.status = "Category Audio";
    },
    goToCollectibles() {
      this.status = "Category Collectibles";
    },
    goToPhotography() {
      this.status = "Category Photography";
    },
    goToIcons() {
      this.status = "Category Icons";
    },
    goToAll() {
      this.status = "CategoryAll";
    },
    showall() {
      console.log("showall");
       this.$emit("showall", "show all products")
    },
    showdigital() {
      console.log("showdigital");
       this.$emit("showdigital", "show the digital products")
    },
    showphysical() {
      console.log("showphysical");
      this.$emit("showphysical", "show the physical products")
    },
  },
  props: {
    category: Number,
  },
  watch: {
    status(val) {
      this.$router.push({ name: val });
    },
  },
  data() {
    return {
      status: "",
    };
  },
  mounted() {
    if (this.category == 0) {
      document.getElementById("categoryAll").checked = true;
    } else if (this.category == 1) {
      document.getElementById("categoryIcons").checked = true;
    } else if (this.category == 2) {
      document.getElementById("categoryPhotography").checked = true;
    } else if (this.category == 3) {
      document.getElementById("categoryCollectibles").checked = true;
    } else if (this.category == 4) {
      document.getElementById("categoryAudio").checked = true;
    } else if (this.category == 5) {
      document.getElementById("categoryVideos").checked = true;
    } else if (this.category == 6) {
      document.getElementById("categoryVintage").checked = true;
    }
  },
};
</script>

<style scoped>
.filterContainer {
  float: left;
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
  padding: 2%;
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
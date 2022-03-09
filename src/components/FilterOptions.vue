<template>
    <div class = "filterContainer">
        <div class = "filterFormat">
            <form>
                <p class = "filterTitle">Format</p>
                <label class="container">All
                <input type="radio" checked="checked" name="filterFormat" value = "all">
                <span class="checkmark"></span>
                </label>
                <label class="container">Digital Only
                <input type="radio" name="filterFormat" value = "digitalOnly">
                <span class="checkmark"></span>
                </label>
                <label class="container">Physical Only
                <input type="radio" name="filterFormat" value = "physical Only">
                <span class="checkmark"></span>
                </label>
            </form>
        </div>
        <div class = "filterCategory">
            <form>
                <p class = "filterTitle">Category</p>
                <label class="container">All
                <input type="radio" checked="checked" name="filterCategory" value = "all">
                <span class="checkmark"></span>
                </label>
                <label class="container">Icons
                <input type="radio" name="filterCategory" value = "digitalOnly">
                <span class="checkmark"></span>
                </label>
                <label class="container">Photography
                <input type="radio" name="filterCategory" value = "physical Only">
                <span class="checkmark"></span>
                </label>
                <label class="container">Collectibles
                <input type="radio" name="filterCategory" value = "physical Only">
                <span class="checkmark"></span>
                </label>
                <label class="container">Audio
                <input type="radio" name="filterCategory" value = "physical Only">
                <span class="checkmark"></span>
                </label>
                <label class="container">Videos
                <input type="radio" name="filterCategory" value = "physical Only">
                <span class="checkmark"></span>
                </label>
                <label class="container">Vintage
                <input type="radio" name="filterCategory" value = "physical Only">
                <span class="checkmark"></span>
                </label>
            </form>
        </div>
    </div>
</template>
<script>
export default {

}
</script>

<style scoped>
.filterContainer {
    width: 50%;
    text-align: left;
    padding: 1%
}
.filterTitle {
    font-weight: bold;
    margin-bottom: 1%;
    font-size: 150%;
}
.form {
    padding: 10px
}
/* The container */
.container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 1%;
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
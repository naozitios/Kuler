<template>
  <div class="select">
    <select name="slct" id="slct" v-on:change="onChange($event)">
      <option value="1" @click ="train">Sort by: Relevancy</option>
      <option value="2">Sort by: Lowest Price</option>
      <option value="3">Sort by: Oldest</option>
    </select>
  </div>
</template>

<script>
export default {
  emits: ["sortByRating", "sortByPrice", "sortByRelavancy"],

  methods: {
    Sortbyrelevancy() {
      this.$emit("sortByRelavancy");
    },
    Sortbyprice() {
      this.$emit("sortByPrice");
    },
    Sortbyratings() {
      this.$emit("sortByRating");
    },
    onChange: function(e){
    var id = e.target.value;
    //var name = e.target.options[e.target.options.selectedIndex].text;
    // console.log('id ',id );
    // console.log('name ',name );
    if(id == 1) {
        this.Sortbyrelevancy()
    } else if (id == 2) {
        this.Sortbyprice()
    } else {
        this.Sortbyratings()
    }
    }
  }
};
</script>
<style scoped>
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;
  outline: 0;
  background: #efefef;
  background-image: none;
}

.select {
  position: relative;
  float: right;
  margin-right: 4%;
  margin-top: 3%;
  text-align: center;
  width: 14%;
  height: 3em;
  width: 50%;
  line-height: 3;
  background: #efefef;
  overflow: hidden;
  border-radius: 40px;
}

select {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0 0 0 10%;
  color: black;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  border: none;
}

select::-ms-expand {
  display: none;
}

.select::after {
  content: "\25BC";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding: 0 1em;
  background: #efefef;
  pointer-events: none;
}

.select:hover::after {
  color: #f37381;
}

.select::after {
  -webkit-transition: 0.25s all ease;
  -o-transition: 0.25s all ease;
  transition: 0.25s all ease;
}
</style>
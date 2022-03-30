<template>
  
  <!-- <div class="search">
        <input type="text" v-model="message" class="searchTerm" placeholder="Search for art">
        <router-link :to="{ name: 'Category All', params: {message}}">

        <button type="submit" class="searchButton" @click="refreshPage()">
            <img src="@/assets/search_icon.png" alt="Search" style="width:20px;height:20px;">
        </button>
        </router-link>
    </div> -->
<div class="search">
  <form action="/CategoryAll">
    <label for="address">Search for art: </label>
    <input type="text" id="name" name="name" />
    <button type="submit" value="Continue to Payment" class="btn btn-primary"><img src="@/assets/search_icon.png" alt="Search" style="width:20px;height:20px;"></button>
   </form>
</div>
</template>

<script>
export default {
}
</script>

<style scoped>
    /*Search Bar*/
    .search {
    width: 50%;
    position: relative;
    display: inline-flex;
    height: 40px;
    }

    .searchTerm {
    width: 100%;
    background-color: #EFEFEF;
    border: 3px solid #EFEFEF;
    /* border: none; */
    border-right: none;
    padding: 5px;
    height: 40px;
    border-radius: 20px 0 0 20px;
    outline: none;
    color: #3A3D3B;
    font-family: 'Open Sans', Verdana, Geneva, Tahoma, sans-serif;
    }

    /* .searchTerm:focus{
    color: #EFEFEF;
    } */

    .searchButton {
    width: 40px;
    height: 40px;
    border: 1px solid #EFEFEF;
    background: #EFEFEF;
    text-align: center;
    color: #fff;
    border-radius: 0 20px 20px 0;
    cursor: pointer;
    font-size: 20px;
    }

    /*Resize the wrap to see the search bar change!*/
    /* .wrap{
    width: 30%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    } */
</style>
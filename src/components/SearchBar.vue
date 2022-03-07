<template>
  <div class="search">
        <input type="text" class="searchTerm" placeholder="Search for art">
        <button type="submit" class="searchButton">
            <img src="images/search_icon.png" alt="Search" style="width:20px;height:20px;">
        </button>
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
    }

    .searchTerm {
    width: 100%;
    background-color: #EFEFEF;
    border: 3px solid #EFEFEF;
    /* border: none; */
    border-right: none;
    padding: 5px;
    height: 20px;
    border-radius: 10px 0 0 10px;
    outline: none;
    color: #3A3D3B;
    font-family: 'Open Sans', Verdana, Geneva, Tahoma, sans-serif;
    }

    /* .searchTerm:focus{
    color: #EFEFEF;
    } */

    .searchButton {
    width: 40px;
    height: 36px;
    border: 1px solid #EFEFEF;
    background: #EFEFEF;
    text-align: center;
    color: #fff;
    border-radius: 0 10px 10px 0;
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
<template>
<div class="select">
            <select name="slct" id="slct">
                <option value="1">Sort by: Relevancy</option>
                <option value="2">Sort by: ??</option>
                <option value="3">Sort by: ??</option>
                <option value="4">Sort by: ??</option>
                <option value="5">Sort by: ??</option>
            </select>
        </div>
</template>

<script>
export default {

}
</script>
<style scoped>
    select {
        -webkit-appearance: none;
        -moz-appearance: none;
        -ms-appearance: none;
        appearance: none;
        outline: 0;
        background: green;
        background-image: none;
        border: 1px solid black;
    }
     
    .select {
        position: relative;
        float: right;
        margin-right: 4%;
        width: 20em;
        height: 3em;
        line-height: 3;
        background: #2C3E50;
        overflow: hidden;
        border-radius: .25em;
    }
     
    select {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0 0 0 .5em;
        color: #fff;
        cursor: pointer;
    }
     
    select::-ms-expand {
        display: none;
    }
     
    .select::after {
        content: '\25BC';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        padding: 0 1em;
        background: #34495E;
        pointer-events: none;
    }
     
    .select:hover::after {
        color: #F39C12;
    }
     
    .select::after {
        -webkit-transition: .25s all ease;
        -o-transition: .25s all ease;
        transition: .25s all ease;
    }
</style>
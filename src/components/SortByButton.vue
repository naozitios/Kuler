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
        background: #EFEFEF;
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
        background: #EFEFEF;
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
        content: '\25BC';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        padding: 0 1em;
        background: #EFEFEF;
        pointer-events: none;
    }
     
    .select:hover::after {
        color: #F37381;
    }
     
    .select::after {
        -webkit-transition: .25s all ease;
        -o-transition: .25s all ease;
        transition: .25s all ease;
    }
</style>
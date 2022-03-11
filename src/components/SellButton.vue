<template>
    <router-link to="/sell"><button type="button" class="btn btn-primary">Sell</button></router-link>
  
</template>

<script>
export default {

}
</script>

<style scoped>
    .btn-primary {
    background-color: #F37381;
    border: None;
    margin: 1em;
    border-radius: 20px;
    padding: 0.5em 2em 0.5em 2em;
}

.btn-primary:hover {
    background-color: #dd6b79;
}

.btn-primary:active, .btn-primary:focus, .btn-primary:visited {
    background-color: #F37381;
}
</style>
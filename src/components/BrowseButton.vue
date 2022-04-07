<template>
  <button type="submit" class="btn btn-primary" onclick="window.location.href='/categoryAll'">
    Back to Browsing
  </button>
</template>

<script>
export default {};
</script>

<style scoped>
.btn-primary {
  background-color: #f37381;
  border: None;
  margin: 1em;
  border-radius: 20px;
  padding: 0.5em 2em 0.5em 2em;
}

.btn-primary:hover {
  background-color: #dd6b79;
}

.btn-primary:active,
.btn-primary:focus,
.btn-primary:visited {
  background-color: #f37381;
}
</style>
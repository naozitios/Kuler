<template>
  <div id ="product-information">
      <div id= "user-information">
      <div id="user-pic">
      <img src="@/assets/user_pic.jpg" alt="User">
      </div>
      <div id="user-info-text"> 
          <h5> TaylorTan99 </h5> <!-- change, link name to DB -->

      </div>
      </div>
      </div>
</template>

<script>
export default {

}
</script>

<style scoped>
img {
  border-radius: 50%;
  width: 8%;
  height: auto;
  float: left;
  margin-left: 10%;

}

.product-information {
    float: left;
}

.user-information {
    display: flex;
    width: 40px;
}
</style>
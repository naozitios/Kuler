<template>
<div id="changePassword">
    <form>
  <div class="form-row">
      <h5 id="main" class="left-flush"><b>Change Password</b></h5>

    <div class="form-group">
      <!-- <label for="inputEmail" >Email Address</label> -->
      <input type="password" class="form-control" id="inputCurrentPassword" placeholder="Current Password">
    </div>
    <div class="form-group">
      <!-- <label for="inputEmail" >Email Address</label> -->
      <input type="password" class="form-control" id="inputNewPassword" placeholder="New Password">
    </div>
    <div class="form-group">
      <!-- <label for="inputEmail" >Email Address</label> -->
      <input type="password" class="form-control" id="inputNewPassword2" placeholder="Confirm New Password">
    </div>
  </div>
</form>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>

@import url(https://fonts.googleapis.com/css?family=Open+Sans);
#main{
    color: #F37381;
}
img {
    width:75px;
    height:75px;
    border-radius:50%;
    padding-left:0%;
    /* border:4px solid #333 */
}
.left-flush{
    text-align: left;
}

/* #feedback-col {
    font-family: 'Open Sans', Verdana, Geneva, Tahoma, sans-serif;
    color: #FFFFFF;
    background-color: #FA8F9A;
    text-align: left;
    display: flow-root;
} */

.form-row {
    padding: 2em;
    text-align: left;
}
.form-group.col-md-6, .form-group {
    padding: 0.5em;

}

#learnMore1, #learnMore2 {
    color:  #3A3D3B; 
}
label{
    text-align: left;
}

/*
#inputEmail1, #inputName1, #inputFeedback1 {
    border-radius: 10px;

}

    .btn-primary {
    text-align: right;
    background-color: #F37381;
    border: None;
    margin: 1em;
    border-radius: 20px;
    padding: 0.5em 2em 0.5em 2em;
    float: right;
    margin-right: 10%
}

.btn-primary:hover {
    background-color: #dd6b79;
}

.btn-primary:active, .btn-primary:focus, .btn-primary:visited {
    background-color: #F37381;
}
*/
</style>


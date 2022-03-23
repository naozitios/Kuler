<template>
<div id="public-profile">
    <form>
  <div class="form-row">
      <h5 id="main" class="left-flush"><b>Public Profile</b></h5>

      <div class="container">
        <div class="col-sm">
        <img src = "@/assets/user_pic_sq.jpg"/>
        <button type="submit" class="btn btn-primary">Upload Photo</button>
        
        </div>
      </div>

      <h6 id="usernameTitle" class="left-flush"><b>Username</b></h6>
      <h6 id="handle" class="left-flush"><b>@jessieeggie</b></h6>
      <small id="learnMore1" class="form-text text-muted">Your username is unique and cannot be changed. <a href="/faq"> Learn more. </a></small>
      <button type="submit" class="btn btn-primary">Get Authorized</button>
      <small id="learnMore2" class="form-text text-muted"><a href="/faq"> Learn more.</a></small>

    <div class="form-group">
      <label for="inputName" >Profile Name</label>
      <input type="name" class="form-control" id="inputName" placeholder="Name">
    </div>
    <div class="form-group">
    <label for="inputBio">Bio</label>
    <textarea class="form-control" id="inputBio" rows="3" placeholder="Bio"></textarea>
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
    object-fit: contain; /* Do not scale the image */
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
*/
.btn-primary {
text-align: right;
background-color: #F37381;
border: None;
margin: 1em;
border-radius: 20px;
padding: 0.5em 2em 0.5em 2em;
/* float: right; */
margin-right: 10%
}

.btn.btn-primary:hover {
    background-color: #dd6b79;
}

.btn.btn-primary:active, .btn-primary:focus, .btn-primary:visited {
    background-color: #F37381;
}

</style>


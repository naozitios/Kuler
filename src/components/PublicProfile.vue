<template>
<div id="public-profile">
    <form>
  <div class="form-row">
      <h5><b>Public Profile</b></h5>
      <img src = "@/assets/user_pic_sq.jpg"/>
      <h6 id="usernameTitle"><b>Username</b></h6>
      <h6 id="handle"><b>@jessieeggie</b></h6>
    <div class="form-group">
      <label for="inputName">Profile Name</label>
      <input type="name" class="form-control" id="inputName" placeholder="Name">
    </div>
    <div class="form-group">
    <label for="inputBio">Bio</label>
    <textarea class="form-control" id="inputBio" rows="3" placeholder="Bio"></textarea>
  </div>
  </div>
 


  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>

@import url(https://fonts.googleapis.com/css?family=Open+Sans);
img {
    width:75px;
    height:75px;
    border-radius:50%;
    /* border:4px solid #333 */
}

#feedback-col {
    font-family: 'Open Sans', Verdana, Geneva, Tahoma, sans-serif;
    color: #FFFFFF;
    background-color: #FA8F9A;
    text-align: left;
    display: flow-root;
}

.form-row {
    padding: 2em;
}
.form-group.col-md-6, .form-group {
    padding: 0.5em;

}

#compulsoryFields1 {
    color: #FFFFFF !important; 
}


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
</style>


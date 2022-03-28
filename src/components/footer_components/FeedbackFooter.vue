<template>
<div id="feedback-col">
    <form>
  <div class="form-row">
      <h5><b>Got a feedback for us? We're glad to hear it.</b></h5>
    <div class="form-group">
      <label for="inputEmail1">Email Address*</label>
      <input type="email" class="form-control" id="inputEmail1" placeholder="Email">
    </div>
    <div class="form-group">
      <label for="inputName1">Name</label>
      <input type="text" class="form-control" id="inputName1" placeholder="Name">
    </div>
    <div class="form-group">
    <label for="inputFeedback1">Feedback*</label>
    <textarea class="form-control" id="inputFeedback1" rows="3" placeholder="Write Something to us..."></textarea>
    <small id="compulsoryFields1" class="form-text text-muted">* indicates compulsory fields.</small>
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


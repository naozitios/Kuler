<template>
<div class="profilePhoto">
        <!-- <div class="col-sm"> -->
        <img src = "@/assets/user_pic_sq.jpg"/>
        <!-- </div> -->
</div>
<div id="nameAndUsername">
    <h4 id="usernameTitle" class="left-flush"><b>Jessie Toh</b></h4>
    <h6 id="handle" class="left-flush">@jessieeggie</h6>
</div>
<div id="rating">
    <h6 id="ratingText">4.1</h6> <StarRating/>
</div>
<div id="authorizedStatus">
    <img class="smallIcon" src="@/assets/authorized_icon.png" alt="Authorized Seller">
    <h6 id="authorized" class="left-flush"><b>Authorized Seller</b></h6>
    
</div>
<div id="button">
    <router-link to="/profileEdit"><button type="submit" class="btn btn-primary">Edit Profile</button></router-link>
</div>
<div id="bioText" class="left-flush">
    <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis aliquam cursus. Aenean tortor odio, maximus at nisi in, condimentum convallis ex. Nunc eu justo efficitur lectus iaculis maximus id sed lorem. </h6>
</div>
</template>

<script>
import StarRating from '@/components/StarRating.vue'
export default {
    name: 'ProfileBiography',
  components:{
    StarRating
  },

}
</script>


<style scoped>

@import url(https://fonts.googleapis.com/css?family=Open+Sans);
#authorized{
    color: #F37381;
}
#ratingText, .smallIcon{
    float:left;
    height: 20px;
    width: auto;
    margin-right: 0%;
    padding-right: 0%;

}
#main{
    color: #F37381;
}
#handle{
    color:#3A3D3B; 

}
img {
    width:75px;
    height:75px;
    border-radius:50%;
    padding-left:0%;
    
    object-fit: contain;
    
    /* border:4px solid #333 */
}
#bioText{
    text-align: left;
}


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


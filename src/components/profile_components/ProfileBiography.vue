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
    <div id="ratingTextNumber">
    <h6 id="ratingText">4.1</h6>
    </div>
    <div id="ratingStars">
    <StarRating/>
    </div>
     
</div>
<div id="authorizedStatus">
    <div id="authorizedIcon">
    <img class="smallIcon" src="@/assets/authorized_icon.png" alt="Authorized Seller">
    </div>
    <div id="authorizedText">
    <h6 id="authorized" class="left-flush"><b>Authorized Seller</b></h6>
    </div>
    
    
    
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
.smallIcon{
    float:left;
    height: 20px;
    width: auto;
    margin-right: 0%;
    padding-right: 0%;

}
#ratingText{
    text-align: right;
}
#rating{
    display: flex;
    flex-direction: row;
}
#ratingTextNumber{
    flex-grow: 0;
    /* padding: 2em; */
    flex-basis: 1;
    padding-left:25%;
    justify-content: center;
  align-content: center;
}
#ratingStars{
    flex-grow: 0;
    /* align-content: flex-start; */
    padding: 0em 0em 0em 0.5em;
    flex-basis: 3;
}
#authorizedIcon{
    flex-grow: 0;
    /* padding: 2em; */
    flex-basis: 2;
    padding-left:20%;
    /* justify-content: center;
  align-content: center; */
}
#authorizedText{
    flex-grow: 0;
    /* align-content: flex-start; */
    padding: 0em 0em 0em 0.5em;
    flex-basis: 4;
}
#authorized{
    text-align: left;
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
    padding-left:0.5em;
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


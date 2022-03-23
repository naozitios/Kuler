<template>
<div id="navWithContent">
        <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
        <!-- section title -->
        <a class="nav-link disabled" id="v-pills-home-tab" data-toggle="pill" href="#" role="tab" aria-controls="v-pills-home" aria-selected="true">General Information</a>
        <!-- links -->
        <a class="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#" role="tab" aria-controls="v-pills-home" aria-selected="true" v-on:click="setLicenseTrue()">Licensing Information</a>
        <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#" role="tab" aria-controls="v-pills-profile" aria-selected="false" v-on:click="setDeliveryTrue()">Delivery Options</a>

        <!-- section title -->
        <a class="nav-link disabled" id="v-pills-home-tab" data-toggle="pill" href="#" role="tab" aria-controls="v-pills-home" aria-selected="true">Information for Buyers</a>
        <!-- links -->
        <a class="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#" role="tab" aria-controls="v-pills-messages" aria-selected="false" v-on:click="setProfileTrue()">Profile Visibility</a>

        <!-- section title -->
        <a class="nav-link disabled" id="v-pills-home-tab" data-toggle="pill" href="#" role="tab" aria-controls="v-pills-home" aria-selected="true">Information for Sellers</a>
        <!-- links -->
        <a class="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#" role="tab" aria-controls="v-pills-settings" aria-selected="false" v-on:click="setAuthorizedTrue()">Authorized Sellers</a>
        </div>

    <div id="contentOnly">
        <!-- <div class="tab-content" id="v-pills-tabContent"> -->
        <!-- <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" v-show="license">This is home</div>
        <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" v-show="delivery">This is profile</div>
        <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab" v-show="profile">This is messages</div>
        <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab" v-show="authorized">This is Settings</div> -->
        <div class="questionBox" v-show="license">
            <h4 class = "title">Frequently Asked Questions</h4>
            <h5 class = "qns">1. Lorem ipsum dolor sit amet?</h5>
            <h5 class = "ans">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis aliquam cursus. Aenean tortor odio, maximus at nisi in, condimentum convallis ex. Nunc eu justo efficitur lectus iaculis maximus id sed lorem. </h5>
            <h5 class = "qns">2. Lorem ipsum dolor sit amet?</h5>
            <h5 class = "ans">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis aliquam cursus. Aenean tortor odio, maximus at nisi in, condimentum convallis ex. Nunc eu justo efficitur lectus iaculis maximus id sed lorem. </h5>
            <h5 class = "qns">3. Lorem ipsum dolor sit amet?</h5>
            <h5 class = "ans">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis aliquam cursus. Aenean tortor odio, maximus at nisi in, condimentum convallis ex. Nunc eu justo efficitur lectus iaculis maximus id sed lorem. </h5>
        </div>
        <div class="questionBox" v-show="delivery">2</div>
        <div class="questionBox" v-show="profile">3</div>
        <div class="questionBox" v-show="authorized">4</div>
        <!-- </div> -->
    </div>
</div>
</template>

<script>
export default {
    data(){
        return {
        license:false,
        delivery:false,
        profile: false,
        authorized: false
        }
    },
    methods:{
        setLicenseTrue(){
            this.license = true
            this.delivery = false
            this.profile = false
            this.authorized = false
        },
        setDeliveryTrue(){
            this.license = false
            this.delivery = true
            this.profile = false
            this.authorized = false
        },
        setProfileTrue(){
            this.license = false
            this.delivery = false
            this.profile = true
            this.authorized = false
        },
        setAuthorizedTrue(){
            this.license = false
            this.delivery = false
            this.profile = false
            this.authorized = true
        }
    }
    
}
</script>


<style scoped>
#navWithContent{
    display: flex;
    flex-direction: row;
}
#navOnly{
    width: 90vw;
    flex-grow: 0;
    flex-basis: 1;
    padding: none;
}
#contentOnly{
    padding-left: 2%;
    padding-right:2%;
    flex-grow: 0;
    flex-basis: 80%;
}
.title, .qns, .ans {
    text-align:left;
}
.title, .qns{
    color:#F37381;
}
.nav.flex-column.nav-pills .nav-link{
    text-align: left;
    padding-left: 2em;
}

.nav.flex-column.nav-pills .nav-link.disabled{
    font-weight: 900;
    padding: 2em 0em 0em 2em;
}

.nav.flex-column.nav-pills{
    flex-basis: 20%;
}
.nav.flex-column.nav-pills a{
    border-radius: 0px;
    color: #FFFFFF;
    background-color: #F37381;
}
.nav.flex-column.nav-pills a:hover{
    border-radius: 0px;
    color: #FFFFFF;
    background-color: #dd6b79;
}
.nav.flex-column.nav-pills a:active, .nav.flex-column.nav-pills a:focus {
    color: #F37381;
    background-color: #F7F0DD;
}
</style>
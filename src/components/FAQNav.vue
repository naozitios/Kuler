<template>
<div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
<a class="nav-link disabled" id="v-pills-home-tab" data-toggle="pill" href="#" role="tab" aria-controls="v-pills-home" aria-selected="true">General Information</a>
  <a class="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#/faq/license" role="tab" aria-controls="v-pills-home" aria-selected="true">Licensing Information</a>
  <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="/faq/delivery" role="tab" aria-controls="v-pills-profile" aria-selected="false">Delivery Options</a>

  <a class="nav-link disabled" id="v-pills-home-tab" data-toggle="pill" href="#" role="tab" aria-controls="v-pills-home" aria-selected="true">Information for Buyers</a>
  <a class="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="/faq/profile" role="tab" aria-controls="v-pills-messages" aria-selected="false">Profile Visibility</a>

  <a class="nav-link disabled" id="v-pills-home-tab" data-toggle="pill" href="#" role="tab" aria-controls="v-pills-home" aria-selected="true">Information for Sellers</a>
  <a class="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="/faq/authorization" role="tab" aria-controls="v-pills-settings" aria-selected="false">Authorized Sellers</a>
</div>
<div class="tab-content" id="v-pills-tabContent">
  <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel">This is home</div>
  <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">This is profile</div>
  <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">This is messages</div>
  <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">This is Settings</div>
</div>
</template>

<script>

export default {

}
</script>


<style scoped>
.nav.flex-column.nav-pills .nav-link{
    text-align: left;
    padding-left: 2em;
}

.nav.flex-column.nav-pills .nav-link.disabled{
    font-weight: 900;
    padding: 2em 0em 0em 2em;
}

.nav.flex-column.nav-pills{
    width:20%;
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
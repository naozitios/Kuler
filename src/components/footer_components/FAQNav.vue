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
            <h5 class = "qns">{{ lQn1 }}</h5>
            <h5 class = "ans">{{lAns1}} </h5>
            <h5 class = "qns">{{lQn2}}</h5>
            <h5 class = "ans">{{lAns2}} </h5>
            <h5 class = "qns">{{lQn3}}</h5>
            <h5 class = "ans">{{lAns3}}</h5>
        </div>
        <div class="questionBox" v-show="delivery">
            <h4 class = "title">Frequently Asked Questions</h4>
            <h5 class = "qns">{{dQn1}}</h5>
            <h5 class = "ans">{{dAns1}} </h5>
            <h5 class = "qns">{{dQn2}}</h5>
            <h5 class = "ans">{{dAns2}} </h5>
            <h5 class = "qns">{{dQn3}}</h5>
            <h5 class = "ans">{{dAns3}}</h5>
        </div>
        <div class="questionBox" v-show="profile">
            <h4 class = "title">Frequently Asked Questions</h4>
            <h5 class = "qns">{{pQn1}}</h5>
            <h5 class = "ans">{{pAns1}} </h5>
            <h5 class = "qns">{{pQn2}}</h5>
            <h5 class = "ans">{{pAns2}} </h5>
            <h5 class = "qns">{{pQn3}}</h5>
            <h5 class = "ans">{{pAns3}}</h5>
        </div>
        <div class="questionBox" v-show="authorized">
            <h4 class = "title">Frequently Asked Questions</h4>
            <h5 class = "qns">{{aQn1}}</h5>
            <h5 class = "ans">{{aAns1}} </h5>
            <h5 class = "qns">{{aQn2}}</h5>
            <h5 class = "ans">{{aAns}} </h5>
            <h5 class = "qns">{{aQn3}}</h5>
            <h5 class = "ans">{{aAns3}}</h5>
        </div>
        <!-- </div> -->
    </div>
</div>
</template>

<script>
import firebaseApp from '../../firebase.js';
import {getFirestore} from "firebase/firestore";
import { doc, getDoc} from "firebase/firestore";
const db = getFirestore(firebaseApp);

export default {
    name:'FAQNav',
    // props:{
    //     lQn1: "",
    //     lAns1: "",
    //     lQn2:"",
    //     lAns2:"",
    //     lQn3:"",
    //     lAns3:"",
    //     dQn1:"",
    //     dAns1:"",
    //     dQn2:"",
    //     dAns2:"",
    //     dQn3:"",
    //     dAns3:"",
    //     pQn1:"",
    //     pAns1:"",
    //     pQn2:"",
    //     pAns2:"",
    //     pQn3:"",
    //     pAns3:"",
    //     aQn1:"",
    //     aAns1:"",
    //     aQn2:"",
    //     aAns2:"",
    //     aQn3:"",
    //     aAns3:""

    // },
    mounted(){
        this.fetchQnsAndAns();
    },
    data(){
        return {
        license:false,
        delivery:false,
        profile: false,
        authorized: false,
        lQn1: "",
        lAns1: "",
        lQn2:"",
        lAns2:"",
        lQn3:"",
        lAns3:"",
        dQn1:"",
        dAns1:"",
        dQn2:"",
        dAns2:"",
        dQn3:"",
        dAns3:"",
        pQn1:"",
        pAns1:"",
        pQn2:"",
        pAns2:"",
        pQn3:"",
        pAns3:"",
        aQn1:"",
        aAns1:"",
        aQn2:"",
        aAns2:"",
        aQn3:"",
        aAns3:""
        }
    },
    methods:{
        async fetchQnsAndAns(){
            let faqPool = await getDoc(doc(db, "faq", "faq"));
            let faqPoolData = faqPool.data()

            //license
            this.lQn1 = (faqPoolData.licenseQn)[0];
            this.lAns1 = (faqPoolData.licenseAns)[0];
            this.lQn2 = (faqPoolData.licenseQn)[1];
            this.lAns2 = (faqPoolData.licenseAns)[1];
            this.lQn3 = (faqPoolData.licenseQn)[2];
            this.lAns3 = (faqPoolData.licenseAns)[2];

            //delivery
            this.dQn1 = (faqPoolData.deliveryQn)[0];
            this.dAns1 = (faqPoolData.deliveryAns)[0];
            this.dQn2 = (faqPoolData.deliveryQn)[1];
            this.dAns2 = (faqPoolData.deliveryAns)[1];
            this.dQn3 = (faqPoolData.deliveryQn)[2];
            this.dAns3 = (faqPoolData.deliveryAns)[2];

            //profile
            this.pQn1 = (faqPoolData.profileQn)[0];
            this.pAns1 = (faqPoolData.profileAns)[0];
            this.pQn2 = (faqPoolData.profileQn)[1];
            this.pAns2 = (faqPoolData.profileAns)[1];
            this.pQn3 = (faqPoolData.profileQn)[2];
            this.pAns3 = (faqPoolData.profileAns)[2];

            //authorized
            this.aQn1 = (faqPoolData.authorizedQn)[0];
            this.aAns1 = (faqPoolData.authorizedAns)[0];
            this.aQn2 = (faqPoolData.authorizedQn)[1];
            this.aAns2 = (faqPoolData.authorizedAns)[1];
            this.aQn3 = (faqPoolData.authorizedQn)[2];
            this.aAns3 = (faqPoolData.authorizedAns)[2];

        },
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
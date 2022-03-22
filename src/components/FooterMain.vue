<template>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <div id="footerContainer">
        <div id="logo1">
            <KulerLogoWhite/>
            <h6 id ="copyright-line"> &copy; 2022</h6>
            <div id="bio">
                <h6 id="bio-text"> Kuler aims to provide digitalization for the sales of artistic content, on a reliable and secure platform. </h6>
            </div>
            <div id="socials">
                <p>
                <a href="https://www.facebook.com/profile.php?id=100078725480774" class="fa fa-facebook"></a>
                &nbsp;&nbsp;
                <a href="https://twitter.com/kulerbt3103" class="fa fa-twitter"></a>
                &nbsp;&nbsp;
                <a href="https://www.instagram.com/instagram/?hl=en" class="fa fa-instagram"></a>
                </p>
            </div>
        </div>
        
        <div id = "faqLinks">
            <router-link to="/faq"><h6 class="faqHeader">Frequently Asked Questions</h6></router-link>
            <br><br>
            <a href="/faq"><h6 class="faqHeader">General Information</h6></a>
            <a href="/faq"><h6 class="faqNormal">Liscensing Information</h6></a>
            <a href="/faq"><h6 class="faqNormal">Delivery Options</h6></a>
             <br><br>
            <a href="/faq"><h6 class="faqHeader">Information for Buyers</h6></a>
            <a href="/faq"><h6 class="faqNormal">Profile Visibility</h6></a>
             <br><br>
            <a href="/faq"><h6 class="faqHeader">Information for Sellers</h6></a>
            <a href="/faq"><h6 class="faqNormal">Delivery Options</h6></a>
        </div>

        <div id = "form1">
            <FeedbackFooter/>
        </div>
    </div>
    
</template>



<script>
import KulerLogoWhite from '@/components/KulerLogoWhite.vue'
import FeedbackFooter from '@/components/FeedbackFooter.vue'

export default {
  name: 'FooterMain',
  components:{
    KulerLogoWhite,
    FeedbackFooter
  },
  data(){
    
  },
  methods:{
   
  }
}
</script>

<style scoped>
.faqHeader, .faqNormal {
    color: #FFFFFF;
    text-align: left;
}
.faqHeader {
    font-weight: 900;
}
.faqNormal {
    font-weight: normal;
}
.fa.fa-facebook, .fa.fa-twitter, .fa.fa-instagram {
    color: #FFFFFF;
    text-decoration: none;
    font-size: 200%;

}
#logo1 {
    padding: 1em;
    flex-grow: 1;
    flex-basis: 0;
}

#faqLinks {
    flex-grow: 1;
    padding: 2em;
    flex-basis: 0;
}
#faqLinks a {
    text-decoration: None;
}
#form1 {
    margin-right: 2em;
    flex-grow: 2;
    flex-basis: 0;
}
#footerContainer {
    display: flex;
    flex-direction: row;
    background-color: #F37381;
}

#bio {
    width: 80%;
}
#copyright-line{
    color: #FFFFFF;
    display: inline;

}

#bio-text, #socials {
    padding: 1em;
    color: #FFFFFF;
    display: block;
    text-align: left;
}

</style>


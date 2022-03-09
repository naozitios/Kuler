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
.fa.fa-facebook, .fa.fa-twitter, .fa.fa-instagram {
    color: #FFFFFF;
    text-decoration: none;
    font-size: 200%;

}
#logo1 {
    padding: 1em;
    float: left;
}

#form1 {
    margin-right: 30%;
}
#footerContainer {
    background-color: #F37381;
}

#bio {
    width: 30%;
}
#copyright-line{
    color: #FFFFFF;
    display: inline;

}

#bio-text {
    color: #FFFFFF;
    display: block;
    text-align: left;
}

</style>


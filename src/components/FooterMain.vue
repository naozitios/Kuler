<template>
    <div id="footerContainer">
        <div id="logo1">
            <KulerLogoWhite/>
            <h6 id ="copyright-line"> &copy; 2022</h6>
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

#copyright-line {
    color: #FFFFFF;
    display: inline;

}

</style>


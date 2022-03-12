<template>

    <KulerLogo/>  
    <SearchBar/>
    <SellButton/>
    <SigninButton/>
    <FavouriteButton/>
    <CartButton/>
    <NavBar/>
  <router-view/>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue'
import KulerLogo from '@/components/KulerLogo.vue'
import SellButton from '@/components/SellButton.vue'
import SigninButton from '@/components/SigninButton.vue'
import FavouriteButton from '@/components/FavouriteButton.vue'
import CartButton from '@/components/CartButton.vue'
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'App',
  components:{
    KulerLogo,
    SearchBar,
    SellButton,
    SigninButton,
    FavouriteButton,
    CartButton,
    NavBar
  },
  data(){
    
  },
  methods:{
   
  }
}
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Open+Sans);

#app {
  font-family: 'Open Sans', Verdana, Geneva, Tahoma, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 0em;
}

</style>

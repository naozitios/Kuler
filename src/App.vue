<template>
  <div id="mainContainer">
    <div id="logo">
      <KulerLogo/> 
    </div>
    <div id="search">
      <SearchBar/>
    </div>
    <div id="sell">
      <SellButton/>
    </div>
    <div id="signup">
    <SigninButton/>
    </div>
    <div id="heart">
    <FavouriteButton/>
    </div>
    <div id="cart">
    <CartButton/>
    </div>
    <div id="signout">
    <SignOutButton/>
    </div>
    
  </div>
  <div id="nav">
  <NavBar/>
  </div>
  <router-view/>
</template>

<script>
import SearchBar from '@/components/header_components/SearchBar.vue'
import KulerLogo from '@/components/header_components/KulerLogo.vue'
import SellButton from '@/components/header_components/SellButton.vue'
import SigninButton from '@/components/header_components/SigninButton.vue'
import FavouriteButton from '@/components/header_components/FavouriteButton.vue'
import CartButton from '@/components/header_components/CartButton.vue'
import SignOutButton from '@/components/header_components/SignOutButton.vue'
import NavBar from '@/components/header_components/NavBar.vue'
export default {
  name: 'App',
  components:{
    KulerLogo,
    SearchBar,
    SellButton,
    SigninButton,
    FavouriteButton,
    CartButton,
    NavBar,
    SignOutButton
  },
  methods:{
   
  }
}
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Open+Sans);
  #mainContainer {
      display: flex;
    flex-direction: row;
  }
  #logo{
    flex-grow: 2;
    /* padding-left: 5%; */
    flex-basis: 0;
    padding-left:5%;
    padding-top:2%;
  }
  #search{
    flex-grow: 12;
  /* padding-left: 5%; */
  flex-basis: 0;
  padding-left:5%;
    padding-top:2%;
  }
  #sell{
    flex-grow: 1;
  /* padding-left: 5%; */
  flex-basis: 0;
  /* padding-left:5%; */
    padding-top:2%;
  }
  #signup{
    flex-grow: 2;
  /* padding-left: 5%; */
  flex-basis: 0;
  padding-left:2%;
    padding-top:2%;
  }
  #heart{
    flex-grow: 1;
  /* padding-left: 5%; */
  flex-basis: 0;
  padding-left:1%;
    padding-top:2.5%;
  }
  #cart{
    flex-grow: 1;
  /* padding-left: 5%; */
  flex-basis: 0;
  /* padding-left:5%; */
    padding-top:2.5%;
  }
  #signout{
    flex-grow: 1;
  /* padding-left: 5%; */
  flex-basis: 0;
  /* padding-left:5%; */
    padding-top:2.5%;
  }
#app {
  font-family: 'Open Sans', Verdana, Geneva, Tahoma, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 0em;
}
#nav{
  padding-top:1%;;
}
</style>
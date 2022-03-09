
<template>
    <div id="nav">
    <ul>
            <li><router-link to="/categoryIcons">Icons</router-link></li>
            <li><router-link to="/categoryPhotography">Photography</router-link> </li>
            <li><router-link to="/categoryCollectibles">Collectibles</router-link></li>
            <li><router-link to="/categoryAudio">Audio</router-link></li>
            <li><router-link to="/cateogryVideos">Videos</router-link></li>
            <li><router-link to="/categoryVintage">Vintage</router-link></li>
        </ul>
  </div>

</template>

<script>
export default {

}
</script>

<style scoped>
    /* Nav Links*/
a {
    -moz-transition: color 0.2s ease, border-bottom 0.2s ease;
    -webkit-transition: color 0.2s ease, border-bottom 0.2s ease;
    -ms-transition: color 0.2s ease, border-bottom 0.2s ease;
    transition: color 0.2s ease, border-bottom 0.2s ease;
    text-decoration: none;
    /* border-bottom: dotted 1px; */
    color: inherit;
}

a:hover {
    border-bottom-color: transparent;
}

/* Nav */

#nav {
    -moz-transition: background-color 0.2s ease, border-top-left-radius 0.2s ease, border-top-right-radius 0.2s ease, padding 0.2s ease;
    -webkit-transition: background-color 0.2s ease, border-top-left-radius 0.2s ease, border-top-right-radius 0.2s ease, padding 0.2s ease;
    -ms-transition: background-color 0.2s ease, border-top-left-radius 0.2s ease, border-top-right-radius 0.2s ease, padding 0.2s ease;
    transition: background-color 0.2s ease, border-top-left-radius 0.2s ease, border-top-right-radius 0.2s ease, padding 0.2s ease;
    background-color: #ffffff;
    color: #636363;
    position: relative;
    width: 100%;
    max-width: 100%;
    padding: 1em 0em 1em 0em;
    /* background-color: #f7f7f7; */
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    cursor: default;
    text-align: center;
}

#nav ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }

        #nav ul li {
            -moz-transition: margin 0.2s ease;
            -webkit-transition: margin 0.2s ease;
            -ms-transition: margin 0.2s ease;
            transition: margin 0.2s ease;
            display: inline-block;
            margin: 0 0.35em;
            padding: 0;
            vertical-align: middle;
        }

            #nav ul li a {
                -moz-transition: font-size 0.2s ease;
                -webkit-transition: font-size 0.2s ease;
                -ms-transition: font-size 0.2s ease;
                transition: font-size 0.2s ease;
                display: inline-block;
                height: 2.25em;
                line-height: 2.25em;
                padding: 0 1.25em;
                border: 0;
                border-radius: 8px;
                box-shadow: inset 0 0 0 1px transparent;
            }

                #nav ul li a:hover {
                    background-color: rgba(222, 222, 222, 0.2);
                    color: #F37381;
                }

                #nav ul li a.router-link-exact-active {
                    background-color: rgba(222, 222, 222, 0.25);
                    box-shadow: none;
                }

</style>
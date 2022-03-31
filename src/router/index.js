import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import LoginPage from '@/views/LoginPage.vue'
import CartInformation from '@/views/CartInformation.vue'
import CartShipping from '@/views/CartShipping.vue'
import CartPayment from '@/views/CartPayment.vue'
import CartPaymentSuccess from '@/views/CartPaymentSuccess'
import Profile from '@/views/profile/Profile.vue'
import ProfileFavourites from '@/views/profile/ProfileFavourites.vue'
import ProfileHistory from '@/views/profile/ProfileHistory.vue'
import ProfileReviews from '@/views/profile/ProfileReviews.vue'
import ProfileEdit from '@/views/profile/ProfileEdit.vue'
import SearchResult from '@/views/SearchResult.vue'
import Sell from '@/views/Sell.vue'
import ProductPage from '@/views/ProductPage.vue'
import FrequentlyAskedQuestions from '@/views/FrequentlyAskedQuestions.vue'
import ReLogin from '@/views/ReLoginPage.vue'
import SignOut from '@/views/SignOut.vue'


/*List of Category pages in nav bar*/
import CategoryAll from '@/views/category/CategoryAll.vue'
import CategoryAudio from '@/views/category/CategoryAudio.vue'
import CategoryCollectibles from '@/views/category/CategoryCollectibles.vue'
import CategoryIcons from '@/views/category/CategoryIcons.vue'
import CategoryPhotography from '@/views/category/CategoryPhotography.vue'
import CategoryVideos from '@/views/category/CategoryVideos.vue'
import CategoryVintage from '@/views/category/CategoryVintage.vue'


//not found
import NotFound from '@/views/NotFound.vue'


const routes = [
    {
        path: '/login',
        name: 'Login',
        component: LoginPage
    },
    {
        path: '/Relogin',
        name: 'ReLogin',
        component: ReLogin
    },
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/CartInformation',
        name: 'CartInformation',
        component: CartInformation
    },
    {
        path: '/CartShipping',
        name: 'CartShipping',
        component: CartShipping
    },
    {
        path: '/CartPayment',
        name: 'CartPayment',
        component: CartPayment
    },
    {
        path: '/CartPaymentSuccess',
        name: CartPaymentSuccess,
        component: CartPaymentSuccess
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile
    },
    {
        path: '/profileEdit',
        name: 'Edit Profile',
        component: ProfileEdit
    },
    {
        path: '/profileFavourites',
        name: 'Your Favourites',
        component: ProfileFavourites
    },
    {
        path: '/profileHistory',
        name: 'Purchase History',
        component: ProfileHistory
    },
    {
        path: '/profileReviews',
        name: 'Profile Reviews',
        component: ProfileReviews
    },
    {
        path: '/searchResult',
        name: 'Search Result',
        component: SearchResult
    },
    {
        path: '/sell',
        name: 'Sell',
        component: Sell
    },
    {
        path: '/faq',
        name: 'Frequently Asked Questions',
        component: FrequentlyAskedQuestions
    },
    /* Category pages */
    {
        path: '/categoryAll',
        name: 'CategoryAll',
        component: CategoryAll,
    },
    {
        path: '/categoryAudio',
        name: 'Category Audio',
        component: CategoryAudio
    },
    {
        path: '/categoryCollectibles',
        name: 'Category Collectibles',
        component: CategoryCollectibles
    },
    {
        path: '/categoryIcons',
        name: 'Category Icons',
        component: CategoryIcons
    },
    {
        path: '/categoryPhotography',
        name: 'Category Photography',
        component: CategoryPhotography
    },
    {
        path: '/categoryVideos',
        name: 'Category Videos',
        component: CategoryVideos
    },
    {
        path: '/categoryVintage',
        name: 'Category Vintage',
        component: CategoryVintage
    },
    {
        path: '/productPage/:id',
        name: 'Product Page',
        component: ProductPage,
        props: true,
    },
    {

        path: '/signOut',
        name: 'Sign Out',
        component: SignOut
    },
    {
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component: NotFound
    }

]


const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
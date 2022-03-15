import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import CartInformation from '@/views/CartInformation.vue'
import CartPayment from '@/views/CartPayment.vue'
import CartShipping from '@/views/CartShipping.vue'
import Profile from '@/views/Profile.vue'
import SearchResult from '@/views/SearchResult.vue'
import Sell from '@/views/Sell.vue'
import ProductPage from '@/views/ProductPage.vue'


/*List of Category pages in nav bar*/
import CategoryAudio from '@/views/category/CategoryAudio.vue'
import CategoryCollectibles from '@/views/category/CategoryCollectibles.vue'
import CategoryIcons from '@/views/category/CategoryIcons.vue'
import CategoryPhotography from '@/views/category/CategoryPhotography.vue'
import CategoryVideos from '@/views/category/CategoryVideos.vue'
import CategoryVintage from '@/views/category/CategoryVintage.vue'

const routes = [
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
        path: '/profile',
        name: 'Profile',
        component: Profile
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
    /* Category pages */
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
        path: '/productPage',
        name: 'Product Page',
        component: ProductPage
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
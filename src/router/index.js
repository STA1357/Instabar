import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import TikTok from '../views/TikTok.vue'
import Subscribers from '../views/viberrouter/Subscribers.vue'
import Views from '../views/viberrouter/Views.vue'
import Likes from '../views/viberrouter/Likes.vue'
import AutoLikes from '../views/viberrouter/AutoLikes.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/subscribers',
    children: [
      {
        path: '/subscribers',
        name: 'Subscribers',
        component: Subscribers
      },
      {
        path: '/views',
        name: 'Views',
        component: Views
      },
      {
        path: '/likes',
        name: 'Likes',
        component: Likes
      },
      {
        path: '/auto-likes',
        name: 'AutoLikes',
        component: AutoLikes
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/tiktok',
    name: 'TikTok',
    component: TikTok
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

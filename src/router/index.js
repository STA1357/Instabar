import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import TikTok from '../views/TikTok.vue'
import Subscribers from '../views/viberrouter/Subscribers.vue'
import Views from '../views/viberrouter/Views.vue'
import Likes from '../views/viberrouter/Likes.vue'
import AutoLikes from '../views/viberrouter/AutoLikes.vue'
import YoutubeSubsribers from '../views/youtuberouter/YoutubeSubsribers.vue'
import YoutubeViews from '../views/youtuberouter/YoutubeViews.vue'
import YoutubeLikes from '../views/youtuberouter/YoutubeLikes.vue'
import TiktokLikes from '../views/tiktokrouter/TiktokLikes.vue'
import TiktokSubscribers from '../views/tiktokrouter/TiktokSubscribers.vue'
import TiktokViews from '../views/tiktokrouter/TiktokViews.vue'


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
    component: About,
    redirect: '/youtubeLikes',
    children: [
      {
        path: '/youtubeLikes',
        name: 'YoutubeLikes',
        component: YoutubeLikes
      },
      {
        path: '/youtubeSubscribers',
        name: 'YoutubeSubsribers',
        component: YoutubeSubsribers
      },
      {
        path: '/youtubeViews',
        name: 'YoutubeViews',
        component: YoutubeViews
      }
    ]
  },
  {
    path: '/tiktok',
    name: 'TikTok',
    component: TikTok,
    redirect: '/tiktokLikes',
    children: [
      {
       path: '/tiktokLikes',
        name: 'TiktokLikes',
        component: TiktokLikes
      },
      {
        path: '/tiktokViews',
        name: 'TiktokViews',
        component: TiktokViews
      },
      {
        path: '/tiktokSubscribers',
        name: 'TiktokSubscribers',
        component: TiktokSubscribers
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

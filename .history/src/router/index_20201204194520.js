import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/songlistdateil/:songid?',
    name: 'SonglistDateil',
    component: () => import('../views/SonglistDateil.vue'),
  },
  {
    path: '/song/:id?',
    name: 'Song',
    component: () => import('../views/Song.vue'),
  },
  {
    path: '/viewmove',
    name: 'Viewmove',
    component: () => import('../views/Viewmove.vue'),
  },
  {
    path: '/newsonglist',
    name: 'Newsonglist',
    component: () => import('../views/Newsonglist.vue'),
  },
  {
    path: '/ranking',
    name: 'Ranking',
    component: () => import('../views/Ranking.vue'),
  },
  {
    path: '/rankingdetail/:rankingid?',
    name: 'RankingDetail',
    component: () => import('../views/RankingDetail.vue'),
  },
  {
    path: '/search',
    name: 'Search',
    component:() => import('../views/Search.vue')
  },
  {
    path: '/main',
    name: 'Main',
    component: () => import('../views/Main.vue'),
    children: [
      {
        path: 'home',
        name: 'Home',
        component:() => import('../views/Home.vue')
      },
      {
        path: 'radio',
        name: 'Radio',
        component:() => import('../views/Radio.vue')
      },
      {
        path: 'find',
        name: 'Find',
        component:() => import('../views/Find.vue')
      }
    ]
  },

  {
    path: '*',
    redirect: {
      name: 'Login'
    }
  }
]

const router = new VueRouter({
  routes
})

export default router

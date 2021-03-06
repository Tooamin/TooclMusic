import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
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
    path: '/rankingdetail/:id?',
    name: 'RankingDetail',
    component: () => import('../views/RankingDetail.vue'),
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('../views/Search.vue')
  },
  {
    path: '/everydayradiolist',
    name: 'Everydayradiolist',
    component: () => import('../views/Everydayradiolist.vue')
  },
  {
    path: '/radio',
    name: 'Radio',
    component: () => import('../views/Radio.vue')
  },
  {
    path: '/singerdetail',
    name: 'SingerDetail',
    component: () => import('../components/SingerDetail.vue')
  },
  {
    path: '/singerdata/:singerid?',
    name: 'SingerData',
    component: () => import('../components/SingerData.vue')
  },
  {
    path: '/everyday',
    name: 'EveryDay',
    component: () => import('../components/EveryDay.vue')
  },
  {
    path: '/song',
    name: 'Song',
    component: () => import('../components/Song.vue')
  },
  {
    path: '/main',
    name: 'Main',
    component: () => import('../views/Main.vue'),
    children: [{
        path: 'home',
        name: 'Home',
        component: () => import('../views/Home.vue')
      },
      {
        path: 'my',
        name: 'My',
        component: () => import('../views/My.vue')
      },
      {
        path: 'find',
        name: 'Find',
        component: () => import('../views/Find.vue')
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
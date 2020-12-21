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
    path: '/songlistdateil:/',
    name: 'SonglistDateil',
    component: () => import('../views/SonglistDateil.vue')
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
        path: 'my',
        name: 'My',
        component:() => import('../views/My.vue')
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

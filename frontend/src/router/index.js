import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'memolist',
    component : function () {
      return import('../views/MemoList.vue')
    }
  },
  {
    path: '/write',
    name: 'writeform',
    component: function () {
      return import('../views/WriteForm.vue')
    }
  },
  {
    path: '/list/:id',
    name: 'pageview',
    component: function () {
      return import('../views/PageView.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

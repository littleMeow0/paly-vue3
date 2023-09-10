import { createRouter, createWebHistory } from 'vue-router'

console.log('BASE_URL', import.meta.env.BASE_URL)

import home from '../views/home.vue'
import notFound from '../components/404.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/name', // 设置子路由页面第一个被显示
      name: 'home',
      component: home,
      children: [
        {
          path: '/name',
          name: 'name',
          component: () => import('../views/name.vue')
        },
        {
          path: '/about',
          name: 'about',
          component: () => import('../views/about.vue')
        },
        {
          path: '/hi/:name',
          name: 'hi',
          component: () => import('../views/hi.vue')
        }
      ]
    },
    { path: '/:pathMatch(.*)*', name: 'notFound', component: notFound },
  ]
})

export default router

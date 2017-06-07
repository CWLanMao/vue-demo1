import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home'
import Member from '@/components/member/member'
import Shopcar from '@/components/shopcar/shopcar'
import Search from '@/components/search/search'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'mui-active',
  routes: [
    {
      path: '/',
      name: 'root',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/member',
      name: 'Member',
      component: Member
    },
    {
      path: '/shopcar',
      name: 'Shopcar',
      component: Shopcar
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    }
  ]
})

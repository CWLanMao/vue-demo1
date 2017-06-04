import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home'
import Member from '@/components/member/member'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
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
      path: '/member',
      name: 'Member',
      component: Member
    }
  ]
})

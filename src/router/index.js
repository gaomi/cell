import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import itemA from '@/components/goods/item/item_a'
import itemB from '@/components/goods/item/item_b'
import itemC from '@/components/goods/item/item_c'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/itemA',
      name: 'itemA',
      component: itemA
    },{
      path: '/itemB',
      name: 'itemB',
      component: itemB
    },{
      path: '/itemC',
      name: 'itemC',
      component: itemC
    }
  ]
})

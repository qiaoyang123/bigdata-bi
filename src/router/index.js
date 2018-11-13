import Vue from 'vue'
import Router from 'vue-router'
import product from './routers/product'
const NotFound = resolve => require(['@/views/notFound'], resolve)
const Home = resolve => require(['@/views/Home'], resolve)
Vue.use(Router)
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children:[
      ...product
    ]
  },
]
routes.push({
  path: '*',
  component: NotFound,
  name: 'notfound'
})
export default new Router({
  routes
})

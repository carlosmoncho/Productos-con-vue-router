import Vue from 'vue'
import VueRouter from 'vue-router'
import Form from '../views/Form'
import ProductsTable from '../views/ProductsTable'
import Info from '../views/Info'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Form',
    name: 'Form',
    component: Form
  },
  {
    path: '/',
    name: 'ProductsTable',
    component: ProductsTable
  },
  {
    path: '/Info',
    name: 'Info',
    component: Info
  },
  {
    path: '/FormEdit/:id',
    name: 'FormEdit',
    component: Form,
    props: true,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

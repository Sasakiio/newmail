import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = () => import('views/home/Home')
const Cart = () => import('views/cart/Cart')
const Category = () => import('views/category/Category')
const Profile = () => import('views/profile/Profile')
const Detail = () => import('../views/datail/Detail')

const routes = [
	{
		path: '/',
		redirect: '/home'
	},
	{
		path: '/home',
		component: Home
	},
	{
		path: '/cart',
		component: Cart
	},
	{
		path: '/category',
		component: Category
	},
	{
		path: '/profile',
		component: Profile
	},
	{
		path: '/detail/:iid',
		component: Detail
	}
]

const router = new Router({
	routes,
	mode: 'history'
})

export default router
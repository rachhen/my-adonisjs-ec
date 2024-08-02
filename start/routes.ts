/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'

const RegisterController = () => import('#controllers/admin/auth/register_controller')
const HomeController = () => import('#controllers/home_controller')
const LoginController = () => import('#controllers/admin/auth/login_controller')
const LogoutController = () => import('#controllers/admin/auth/logout_controller')
const DashboardController = () => import('#controllers/admin/dashboard_controller')
const ProductsController = () => import('#controllers/products_controller')

router.get('/', [HomeController, 'index']).as('home')
router.on('/admin').redirect('admin.dashboard')

router
  .group(() => {
    router
      .group(() => {
        router.get('/register', [RegisterController, 'show']).as('register.show')
        router.post('/register', [RegisterController, 'store']).as('register.store')

        router.get('/login', [LoginController, 'show']).as('login.show')
        router.post('/login', [LoginController, 'store']).as('login.store')

        router.delete('/logout', [LogoutController, 'handle']).as('logout').use(middleware.auth())
      })
      .as('auth')

    router
      .group(() => {
        router.get('/dashboard', [DashboardController, 'index']).as('dashboard')
        router.resource('/products', ProductsController).as('products')
      })
      .use(middleware.auth())
  })
  .as('admin')
  .prefix('/admin')

import User from '#models/user'
import { loginValidator } from '#validators/auth'
import type { HttpContext } from '@adonisjs/core/http'

export default class LoginController {
  async show({ inertia }: HttpContext) {
    return inertia.render('admin/auth/login')
  }

  async store({ request, response, auth }: HttpContext) {
    const data = await request.validateUsing(loginValidator)

    const user = await User.verifyCredentials(data.email, data.password)

    await auth.use('web').login(user)

    return response.redirect().toRoute('admin.dashboard')
  }
}

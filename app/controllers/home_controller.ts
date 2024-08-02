import type { HttpContext } from '@adonisjs/core/http'

export default class HomeController {
  async index({ inertia, auth }: HttpContext) {
    await auth.check()
    const user = auth.user

    return inertia.render('home', { user })
  }
}

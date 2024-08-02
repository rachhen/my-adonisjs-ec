import { CategoryFactory } from '#database/factories/category_factory'
import { ProductFactory } from '#database/factories/product_factory'
import Category from '#models/category'
import Product from '#models/product'
import User from '#models/user'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    await Product.query().delete()
    await Category.query().delete()
    await User.query().delete()

    await User.create({ id: 1, fullName: 'Test User', email: 'test@test.com', password: '123456' })
    await CategoryFactory.create()
    await ProductFactory.createMany(100)
  }
}

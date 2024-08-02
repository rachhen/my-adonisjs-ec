import Category from '#models/category'
import factory from '@adonisjs/lucid/factories'

export const CategoryFactory = factory
  .define(Category, async ({ faker }) => {
    return {
      name: faker.commerce.product(),
      description: faker.lorem.lines(1),
    }
  })
  .build()

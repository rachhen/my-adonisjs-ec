import Product from '#models/product'
import factory from '@adonisjs/lucid/factories'

export const ProductFactory = factory
  .define(Product, async ({ faker }) => {
    return {
      name: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      price: Number.parseFloat(faker.commerce.price() + ''),
      stock_quantity: 100,
      categoryId: 1, // randomInt(1, 1),
    }
  })
  .build()

'use strict'
const Product = use('App/Models/Product')
class ProductController {
  async index () {
    const product = await Product.query()
      .with('file')
      .fetch()
    return product
  }
  async store ({ request }) {
    const data = request.only(['name', 'file_id'])
    const product = await Product.create(data)
    return product
  }
  async show ({ params }) {
    const product = await Product.findOrFail(params.id)
    await product.load('file')
    return product
  }
  async update ({ params, request }) {
    const data = request.only(['name', 'file_id'])
    const product = await Product.findOrFail(params.id)
    product.merge(data)
    await product.save()
    return product
  }
  async destroy ({ params }) {
    const product = await Product.findOrFail(params.id)
    await product.delete()
  }
}

module.exports = ProductController

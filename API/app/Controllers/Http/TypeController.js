'use strict'
const Type = use('App/Models/Type')
class TypeController {
  async index ({ params }) {
    const type = await Type.query()
      .where({ product_id: params.products_id })
      .with('file')
      .fetch()
    return type
  }
  async store ({ params, request }) {
    const data = request.only(['description', 'baseValue', 'file_id'])
    const type = await Type.create({ ...data, product_id: params.products_id })
    return type
  }
  async show ({ params }) {
    const type = await Type.findOrFail(params.id)
    await type.load('file')
    return type
  }
  async update ({ params, request }) {
    const data = request.only(['description', 'baseValue', 'file_id'])
    const type = await Type.findOrFail(params.id)
    type.merge({ ...data, product_id: params.products_id })
    await type.save()
    return type
  }
  async destroy ({ params }) {
    const type = await Type.findOrFail(params.id)
    await type.delete()
  }
}

module.exports = TypeController

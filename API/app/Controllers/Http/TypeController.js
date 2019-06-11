'use strict'
const Type = use('App/Models/Type')
class TypeController {
  async index () {
    const type = await Type.query()
      .with('product')
      .with('file')
      .fetch()
    return type
  }
  async store ({ request }) {
    const data = request.only([
      'product_id',
      'description',
      'baseValue',
      'file_id'
    ])
    const type = await Type.create(data)
    return type
  }
  async show ({ params }) {
    const type = await Type.findOrFail(params.id)
    await type.load('product')
    await type.load('file')
    return type
  }
  async update ({ params, request }) {
    const data = request.only([
      'product_id',
      'description',
      'baseValue',
      'file_id'
    ])
    const type = await Type.findOrFail(params.id)
    type.merge(data)
    await type.save()
    return type
  }
  async destroy ({ params }) {
    const type = await Type.findOrFail(params.id)
    await type.delete()
  }
}

module.exports = TypeController

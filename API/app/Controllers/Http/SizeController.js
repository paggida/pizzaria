'use strict'
const Size = use('App/Models/Size')
const Type = use('App/Models/Type')

class SizeController {
  async index ({ params }) {
    const size = await Size.query()
      .where({ product_id: params.products_id })
      .with('file')
      .fetch()
    const type = await Type.findOrFail(params.types_id)
    // Valida se o Type da chamada corresponde aos tamanhos do produto
    if (type.product_id === parseInt(params.products_id)) {
      return size.rows.map(item => {
        item.calculatePrice(type.baseValue)
        return item
      })
    } else {
      return []
    }
  }
  async store ({ params, request }) {
    const data = request.only(['description', 'baseIndex', 'file_id'])
    const size = await Size.create({ ...data, product_id: params.products_id })
    return size
  }
  async show ({ params }) {
    const size = await Size.findOrFail(params.id)
    const type = await Type.findOrFail(params.types_id)

    // Valida se o Type da chamada corresponde aos tamanhos do produto
    if (type.product_id === parseInt(params.products_id)) {
      await size.load('file')
      size.calculatePrice(type.baseValue)
      return size
    } else {
      return []
    }
  }
  async update ({ params, request }) {
    const data = request.only(['description', 'baseIndex', 'file_id'])
    const size = await Size.findOrFail(params.id)
    size.merge({ ...data, product_id: params.products_id })
    await size.save()
    return size
  }
  async destroy ({ params }) {
    const size = await Size.findOrFail(params.id)
    await size.delete()
  }
}

module.exports = SizeController

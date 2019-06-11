'use strict'
const Size = use('App/Models/Size')
class SizeController {
  async index () {
    const size = await Size.query()
      .with('file')
      .fetch()
    return size
  }
  async store ({ request }) {
    const data = request.only([
      'type_id',
      'description',
      'baseIndex',
      'file_id'
    ])
    const size = await Size.create(data)
    return size
  }
  async show ({ params }) {
    const size = await Size.findOrFail(params.id)
    await size.load('file')
    return size
  }
  async update ({ params, request }) {
    const data = request.only([
      'type_id',
      'description',
      'baseIndex',
      'file_id'
    ])
    const size = await Size.findOrFail(params.id)
    size.merge(data)
    await size.save()
    return size
  }
  async destroy ({ params }) {
    const size = await Size.findOrFail(params.id)
    await size.delete()
  }
}

module.exports = SizeController

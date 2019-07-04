'use strict'
const Purchase = use('App/Models/Purchase')
const DataBase = use('Database')

class PurchaseController {
  async index () {
    const purchase = await Purchase.query()
      .with('purchaseItem')
      .with('user')
      .with('type')
      .with('size')
      .fetch()
    return purchase.rows.map(item => {
      item.fromNow()
      return item
    })
  }
  async store ({ request, auth }) {
    const data = request.only([
      'description',
      'fullValue',
      'zipCode',
      'street',
      'number',
      'district'
    ])
    const purchaseItem = request.input('purchaseItems')

    const trx = await DataBase.beginTransaction()
    const purchase = await Purchase.create(
      { ...data, user_id: auth.user.id },
      trx
    )
    await purchase.purchaseItem().createMany(purchaseItem, trx)
    await trx.commit()

    return purchase
  }
  async show ({ params }) {
    const purchase = await Purchase.query()
      .where('user_id', '=', params.id)
      .with('purchaseItem')
      .with('user')
      .with('type')
      .with('size')
      .fetch()
    return purchase.rows.map(item => {
      item.fromNow()
      return item
    })
  }
  async update ({ params, request }) {
    const data = request.only([
      'delivered',
      'description',
      'fullValue',
      'zipCode',
      'street',
      'number',
      'district'
    ])

    const purchase = await Purchase.findOrFail(params.id)
    await purchase.load('purchaseItem')

    purchase.merge(data)
    await purchase.save()

    return purchase
  }
  async destroy ({ params }) {
    const purchase = await Purchase.findOrFail(params.id)
    await purchase.delete()
  }
}

module.exports = PurchaseController

'use strict'

const Model = use('Model')

class Purchase extends Model {
  purchaseItem () {
    return this.hasMany('App/Models/PurchaseItem')
  }
  user () {
    return this.belongsTo('App/Models/User')
  }
}

module.exports = Purchase

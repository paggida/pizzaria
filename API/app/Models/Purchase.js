'use strict'

const Model = use('Model')

class Purchase extends Model {
  static get computed () {
    return ['formatFullValue']
  }
  getFormatFullValue ({ fullValue }) {
    return fullValue.toFixed(2)
  }
  purchaseItem () {
    return this.hasMany('App/Models/PurchaseItem')
  }
  user () {
    return this.belongsTo('App/Models/User')
  }
}

module.exports = Purchase

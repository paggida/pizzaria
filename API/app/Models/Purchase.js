'use strict'

const Model = use('Model')

class Purchase extends Model {
  static boot () {
    super.boot()
    this.addTrait('Moment')
  }
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
  type () {
    return this.belongsToMany('App/Models/Type').pivotTable('purchase_items')
  }
  size () {
    return this.belongsToMany('App/Models/Size').pivotTable('purchase_items')
  }
}

module.exports = Purchase

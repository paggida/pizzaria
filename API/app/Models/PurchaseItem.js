'use strict'
const Model = use('Model')

class PurchaseItem extends Model {
  purchase () {
    return this.belongsTo('App/Models/Purchase')
  }
  type () {
    return this.belongsTo('App/Models/Type')
  }
  size () {
    return this.belongsTo('App/Models/Size')
  }
}

module.exports = PurchaseItem

'use strict'

const Model = use('Model')

class Type extends Model {
  product () {
    return this.belongsTo('App/Models/Product')
  }
  file () {
    return this.belongsTo('App/Models/File')
  }
}

module.exports = Type

'use strict'

const Model = use('Model')

class Size extends Model {
  type () {
    return this.belongsTo('App/Models/Type')
  }
  file () {
    return this.belongsTo('App/Models/File')
  }
}

module.exports = Size

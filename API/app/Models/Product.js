'use strict'

const Model = use('Model')

class Product extends Model {
  file () {
    return this.belongsTo('App/Models/File')
  }
}

module.exports = Product

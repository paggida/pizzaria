'use strict'

const Model = use('Model')

class Product extends Model {
  size () {
    return this.hasMany('App/Models/Size')
  }
  type () {
    return this.hasMany('App/Models/Type')
  }
  file () {
    return this.belongsTo('App/Models/File')
  }
}

module.exports = Product

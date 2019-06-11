'use strict'

const Model = use('Model')

class Type extends Model {
  product () {
    return this.belongsTo('App/Models/Product')
  }
  size () {
    return this.hasMany('App/Models/Size')
  }
  file () {
    return this.belongsTo('App/Models/File')
  }
}

module.exports = Type

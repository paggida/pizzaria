'use strict'
const Antl = use('Antl')

class TypeU {
  get validateAll () {
    return true
  }
  get rules () {
    return {
      product_id: 'integer',
      description: 'string',
      baseValue: 'number',
      file_id: 'integer'
    }
  }
  get messages () {
    return Antl.list('validation')
  }
}

module.exports = TypeU

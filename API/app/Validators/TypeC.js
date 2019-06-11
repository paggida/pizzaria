'use strict'
const Antl = use('Antl')

class TypeC {
  get validateAll () {
    return true
  }
  get rules () {
    return {
      product_id: 'required|integer',
      description: 'required|string',
      baseValue: 'required|number',
      file_id: 'required|integer'
    }
  }
  get messages () {
    return Antl.list('validation')
  }
}

module.exports = TypeC

'use strict'
const Antl = use('Antl')

class Product {
  get validateAll () {
    return true
  }
  get rules () {
    return {
      name: 'required|string',
      description: 'required|string',
      preparation: 'required|integer',
      file_id: 'required|integer'
    }
  }
  get messages () {
    return Antl.list('validation')
  }
}

module.exports = Product

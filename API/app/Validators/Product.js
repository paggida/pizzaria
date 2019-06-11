'use strict'
const Antl = use('Antl')

class Product {
  get validateAll () {
    return true
  }
  get rules () {
    return {
      name: 'required|string|alpha',
      file_id: 'required|integer'
    }
  }
  get messages () {
    return Antl.list('validation')
  }
}

module.exports = Product

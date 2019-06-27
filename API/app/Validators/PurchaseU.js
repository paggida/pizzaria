'use strict'
const Antl = use('Antl')

class Purchase {
  get validateAll () {
    return true
  }
  get rules () {
    return {
      delivered: 'boolean',
      description: 'string',
      fullValue: 'number',
      zipCode: 'string',
      street: 'string',
      number: 'integer',
      district: 'string'
    }
  }
  get messages () {
    return Antl.list('validation')
  }
}

module.exports = Purchase

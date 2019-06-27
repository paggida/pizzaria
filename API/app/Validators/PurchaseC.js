'use strict'
const Antl = use('Antl')

class Purchase {
  get validateAll () {
    return true
  }
  get rules () {
    return {
      delivered: 'boolean',
      description: 'required|string',
      fullValue: 'required|number',
      zipCode: 'required|string',
      street: 'required|string',
      number: 'required|integer',
      district: 'required|string'
    }
  }
  get messages () {
    return Antl.list('validation')
  }
}

module.exports = Purchase

'use strict'
const Antl = use('Antl')

class SizeU {
  get validateAll () {
    return true
  }
  get rules () {
    return {
      type_id: 'integer',
      description: 'string',
      baseIndex: 'number',
      file_id: 'integer'
    }
  }
  get messages () {
    return Antl.list('validation')
  }
}

module.exports = SizeU

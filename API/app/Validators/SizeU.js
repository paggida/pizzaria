'use strict'
const Antl = use('Antl')

class SizeU {
  get validateAll () {
    return true
  }
  get rules () {
    return {
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

'use strict'
const Antl = use('Antl')

class SizeC {
  get validateAll () {
    return true
  }
  get rules () {
    return {
      description: 'required|string',
      baseIndex: 'required|number',
      file_id: 'required|integer'
    }
  }
  get messages () {
    return Antl.list('validation')
  }
}

module.exports = SizeC

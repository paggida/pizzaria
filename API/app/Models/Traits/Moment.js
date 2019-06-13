'use strict'

const moment = require('moment')

class Moment {
  register (Model) {
    Model.prototype.fromNow = function () {
      this.fromNow = moment(
        this.created_at,
        'DDMMYYY, h:mm:ss',
        'pt-br'
      ).fromNow()
    }
  }
}

module.exports = Moment

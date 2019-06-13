'use strict'

class Price {
  register (Model) {
    Model.prototype.calculatePrice = function (baseValue) {
      if (!isNaN(baseValue)) {
        this.price = (this.baseIndex * baseValue).toFixed(2)
      }
    }
  }
}

module.exports = Price

'use strict'

const Schema = use('Schema')

class PurchaseSchema extends Schema {
  up () {
    this.create('purchases', table => {
      table.increments()
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.boolean('delivered').defaultTo(false)
      table.string('description', 250).notNullable()
      table.float('fullValue', 2).notNullable()
      table.string('zipCode', 9).notNullable()
      table.string('street', 200).notNullable()
      table.integer('number').notNullable()
      table.string('district', 120).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('purchases')
  }
}

module.exports = PurchaseSchema

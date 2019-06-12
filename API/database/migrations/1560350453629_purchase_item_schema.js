'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PurchaseItemSchema extends Schema {
  up () {
    this.create('purchase_items', table => {
      table.increments()
      table
        .integer('purchase_id')
        .unsigned()
        .references('id')
        .inTable('purchases')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .integer('type_id')
        .unsigned()
        .references('id')
        .inTable('types')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')
      table
        .integer('size_id')
        .unsigned()
        .references('id')
        .inTable('sizes')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')
      table.float('price', 2).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('purchase_items')
  }
}

module.exports = PurchaseItemSchema

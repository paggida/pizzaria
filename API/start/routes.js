'use strict'

const Route = use('Route')

Route.post('users', 'UserController.store').validator('User')
Route.post('sessions', 'SessionController.store').validator('Session')
Route.get('files/:name', 'FileController.show')

Route.group(() => {
  Route.get('users', 'UserController.show')
  Route.post('files', 'FileController.store')
  Route.resource('products', 'ProductController')
    .validator(
      new Map([
        [['products.update'], ['Product']],
        [['products.store'], ['Product']]
      ])
    )
    .apiOnly()
  Route.resource('products.types', 'TypeController')
    .validator(
      new Map([
        [['products.types.update'], ['TypeU']],
        [['products.types.store'], ['TypeC']]
      ])
    )
    .apiOnly()
  Route.resource('products.types.sizes', 'SizeController')
    .validator(
      new Map([
        [['products.types.sizes.update'], ['SizeU']],
        [['products.types.sizes.store'], ['SizeC']]
      ])
    )
    .apiOnly()
  Route.resource('purchases', 'PurchaseController')
    .validator(
      new Map([
        [['purchases.update'], ['PurchaseU']],
        [['purchases.store'], ['PurchaseC']]
      ])
    )
    .apiOnly()
}).middleware(['auth'])

'use strict'

const Route = use('Route')

Route.post('users', 'UserController.store').validator('User')
Route.post('sessions', 'SessionController.store').validator('Session')
Route.get('files/:name', 'FileController.show')

Route.group(() => {
  Route.post('files', 'FileController.store')
  Route.resource('products', 'ProductController')
    .validator(
      new Map([
        [['products.update'], ['Product']],
        [['products.store'], ['Product']]
      ])
    )
    .apiOnly()
  Route.resource('types', 'TypeController')
    .validator(
      new Map([[['types.update'], ['TypeU']], [['types.store'], ['TypeC']]])
    )
    .apiOnly()
  Route.resource('sizes', 'SizeController')
    .validator(
      new Map([[['sizes.update'], ['SizeU']], [['sizes.store'], ['SizeC']]])
    )
    .apiOnly()
}).middleware(['auth'])

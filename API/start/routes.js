'use strict'

const Route = use('Route')

Route.post('users', 'UserController.store').validator('User')
Route.post('sessions', 'SessionController.store').validator('Session')
Route.get('files/:name', 'FileController.show')

Route.group(() => {
  Route.post('files', 'FileController.store')
}).middleware(['auth'])

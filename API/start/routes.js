'use strict'

const Route = use('Route')

Route.post('/users', 'UserController.store').validator('User')

// Tratamento de rotas com autenticação
/* Route.group(() => {

}).middleware(['auth']) */

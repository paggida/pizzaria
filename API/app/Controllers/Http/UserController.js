'use strict'

const User = use('App/Models/User')
class UserController {
  async store ({ request, response }) {
    const data = request.only(['name', 'email', 'password'])
    const user = await User.create({ ...data, admin: false })
    return response.status(200).json(user)
  }
  async show ({ auth }) {
    const user = await User.findOrFail(auth.user.id)
    await user.load('purchase')
    return user
  }
}

module.exports = UserController

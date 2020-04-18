'use strict'

const User = use('App/models/User')

class DatabaseSeeder {
  async run () {
    const user = await User.create({
      name: 'Guilherme Jeronimo',
      email: 'gjpnkflyd@gmail.com',
      password: '123456'
    })

    await user.teams().create({
      name: 'Perfect Line',
      user_id: user.id
    })
  }
}

module.exports = DatabaseSeeder

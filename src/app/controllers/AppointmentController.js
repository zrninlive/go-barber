const { User, Appointment } = require('../models')

class AppointmentController {
  async create (req, res) {
    const provider = await User.findByPk(req.params.provider)

    return res.render('appointments/create', {
      provider
    })
  }

  async store (req, res) {
    const { id } = req.session.user
    const { provider } = req.params
    const { date } = req.body

    await Appointment.create({
      user_id: 3,
      provider_id: 4,
      date
    })

    return res.redirect('/app/dashboard')
  }
}

module.exports = new AppointmentController()

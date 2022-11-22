import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import { transport } from './mailer.js'

let router = express.Router()

router.post('/', async (req, res) => {
  try {
    const { name, phone, message } = req.body

    const username = name.toUpperCase() || 'не вказано'
    const topic = message || 'не вказано'

    const html = `Ім'я: <b>${username}</b><br>Телефон: <b>${phone}</b><br>Тема: <b>${topic}</b>`

    let mailDetails = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: 'Перезвоніть мені будь ласка!!!',
      html,
    }

    transport.sendMail(mailDetails, function (err, _) {
      if (err) {
        res.status(400).json({ message: err })
      } else {
        res.status(200).json({ message: 'success' })
      }
    })
  } catch (err) {
    res.status(500).json(err)
  }
})

export default router

import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import { transport } from './mailer.js'

let router = express.Router()

router.post('/', async (req, res) => {
  try {
    const { username, number, message } = req.body
    
    const name = username.toUpperCase() || 'не вказано'
    const topic = message || 'не вказано'

    const html = `Ім'я: <b>${name}</b><br>Телефон: <b>${number}</b><br>Тема: ${topic}`

    let mailDetails = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: 'Перезвоніть мені будь ласка!!!',
      html,
    }

    transport.sendMail(mailDetails, function (err, _) {
      if (err) {
        res.status(400).json({ message: 'Виникла помилка. Будь ласка спробуйте ще раз!' })
      } else {
        res.status(200).json({ message: 'Повідомлення відправлено успішно. Чекайте на наш дзвінок в найблищий час. Дякуєм!' })
      }
    })
  } catch (err) {
    res.status(500).json(err)
  }
})

export default router

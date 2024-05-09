import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import FeedbackController from '../controllers/feedback-controller.js'

let router = express.Router()

router.post('/', FeedbackController.orderFeedback)

export default router

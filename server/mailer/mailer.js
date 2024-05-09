import * as dotenv from 'dotenv'
dotenv.config()
import nodemailer from 'nodemailer';

const options = {
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, 
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.PSWD_WS
    }
}

export const transport = nodemailer.createTransport(options)
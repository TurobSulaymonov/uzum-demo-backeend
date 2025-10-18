import express from 'express'
import authRoutes from './auth.js'
import otpRoutes from './otp.js'

const router = express.Router()

router.use('/auth', authRoutes)
router.use('/otp', otpRoutes)




export default router
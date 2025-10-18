import express from "express"
import mongoose from 'mongoose'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import routes from './routes/index.js'
import errorMiddleware from './middlewares/error.middleware.js'

dotenv.config()

const app = express()


// Middleware 

app.use(express.json())
app.use(cors({origin: process.env.CLIENT_URL, credentials: true}))
app.use(cookieParser())
app.use(express.urlencoded({extended: false}))

// Routes

app.use('/api', routes)

// Error Handling

app.use(errorMiddleware)



const boostrap = async () => {
    try{
        const PORT = process.env.PORT || 5000
        mongoose.connect(process.env.MONGO_URL).then (() => console.log('Connected to MongoDB'))
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

    } catch(error) {
        console.log('Error connecting to MongoDB', error)
    }
} 

boostrap()

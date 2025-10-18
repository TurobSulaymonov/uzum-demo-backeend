import User from "../models/user.models.js"
import bcrypt from 'bcrypt'


export const login = async(req, res, next) => {
    try{
        const {email, password} = req.body
        const user = await User.findOne({email})
         if(!user) return res.json({failure:'User not found'})
        const isValidPassword = await bcrypt.compare(password, user.password)
         if(!isValidPassword) return res.json({failure: 'Password in correct'})
        return res.json({user})   
    } catch(error){
        next(error)
    }
}


export const register = async (req, res, next) => {
    try{
        const {email, password, fullName} = req.body
        const user = await User.findOne({email})
         if(user) return res.json({failure: 'User already exsists'})
        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = await User.create({email, password: hashedPassword, fullName}) 
         res.json({user: newUser})   
    }  catch(error){
        next(error)
    }
}
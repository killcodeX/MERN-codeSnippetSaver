import UserMessage from "../models/userMessage.js";
import mongoose from "mongoose";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const signin = async (res, req) => {
    const { email, password } = req.body;
    try{
        const existingUser = await UserMessage.findOne({ email })
        //const example = await UserMessage.fin
        if(!existingUser) return res.status(404).json({ message: "User doesn't exist"})

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password)
        if(!isPasswordCorrect) return res.status(400).json({message : 'Invalid credentials'})

        const token = jwt.sign({ email:existingUser.email, id: existingUser._id} , 'test')

        res.status(200).json({ result: existingUser, token})
    }catch(error){
        res.status(500).json({ message: 'Something went wrong !!'})
    }
}

export const signup = async (res, req) => {
    const { fname, lname, email, password, rpassword } = req.body;
    try{
        const existingUser = await UserMessage.findOne({ email })
        if(existingUser) return res.status(400).json({ message: "User already exist"})

        if(password !== rpassword) return res.status(400).json({ message: "Password doesn't match"})

        const hashPassword = await bcrypt.hash(password, 12)

        const result = await UserMessage.create({email, password: hashPassword, name: `${fname} ${lname}`})

        const token = jwt.sign({ email: result.email, id: result._id} , 'test', { expiresIn : '1h'})

        res.status(200).json({ result, token})
    }catch(error){
        res.status(500).json({ message: 'Something went wrong !!'})
    }
}
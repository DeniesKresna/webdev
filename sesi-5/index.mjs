import express from 'express'
import router from './routes/routes.mjs'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config()

const app = express()
const PORT = process.env.PORT || "1234"

const homeRoute = (req, res) => {
    res.send("Hello World baru sekaliiiiiii")
}

app.use(cors())
app.use(express.json())
app.get("/", homeRoute)

app.use(router)

mongoose.connect(process.env.MONGODB_URI || "connectionstring", {})

mongoose.connection.once('open', () => {
    console.log('connected to mongodb')
})

app.listen(PORT, (error)=>{
    if(!error){
        console.log(`aplikasi berjalan di port ${PORT}`)
    }else{
        console.log(`aplikasi gagal dijalankan`)
    }
})
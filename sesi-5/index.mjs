import express from 'express'
import router from './routes/routes.mjs'
import mongoose from 'mongoose'

const app = express()
const PORT = 4000

const homeRoute = (req, res) => {
    res.send("Hello World baru sekaliiiiiii")
}

app.use(express.json())
app.get("/", homeRoute)

app.use(router)

mongoose.connect('mongodb://admin:secret@localhost:27018/fullstack?authSource=admin', {})

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
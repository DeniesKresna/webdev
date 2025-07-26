import express from 'express';
import router from './routes/routes.mjs';
import mongoose from 'mongoose';
import { badJsonHandlerMiddleware } from './routes/body-read-middleware.mjs';


const app = express();
const PORT = 3000;

app.use(express.json())
app.use(badJsonHandlerMiddleware)
app.use(router)

mongoose.connect('mongodb://admin:secret@localhost:27018/fullstack1?authSource=admin', {})

mongoose.connection.once('open', () => {
  console.log('✅ Connected to MongoDB');
});

app.listen(PORT, (error) => {
    if(!error){
        console.log(`server successfully running in port ${PORT}`)
    }else{
        console.log(`Error Occured, server cant start`, error)
    }
})
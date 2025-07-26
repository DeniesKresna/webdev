import express from 'express';
import router from './routes/routes.mjs';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send("Hello worlds")
})

app.use(express.json())
app.use(router)

app.listen(PORT, (error) => {
    if(!error){
        console.log(`server successfully running in port ${PORT}`)
    }else{
        console.log(`Error Occured, server cant start`, error)
    }
})
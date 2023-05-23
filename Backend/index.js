import express from 'express'
import conectarDb from './config/db.js  ';
import dotenv from 'dotenv'
import userRouter from './rutes/userRoute.js'

const app = express();
app.use(express.json())
dotenv.config()
conectarDb()
app.use('/api/usuarios',userRouter)
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
})


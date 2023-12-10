import express from 'express'
import conectarDb from './config/db.js  ';
import dotenv from 'dotenv'
import userRouter from './rutes/userRoute.js'
import reportsRouter from './rutes/reportsRoute.js'
import multer from "multer";
import cors from 'cors';
import { Server } from 'socket.io';
const app = express();
app.use(express.json())
dotenv.config()
conectarDb()
const whiteList = [process.env.FRONTEND_URL]
const corsOptions = {
    origin: function (origin, callback) {
        if (whiteList.includes(origin)) {
            callback(null, true)
        } else {
            callback(new Error('error en cors'))
        }
    }
}
const storage = multer.diskStorage({
    filename: function (res, file, callback) {
        const ext = file.originalname.split('.').pop()
        const filename = Date.now()
        callback(null, `${filename}.${ext}`)
    },
    destination: function (res, file, callback) {
        callback(null, './upload')
    },
})

const upload = multer({ storage })
app.use(express.static('upload'))
app.use(cors())
app.use('/api/users', userRouter)
app.use('/api/reports', reportsRouter)
const PORT = process.env.PORT || 5000
const ser = app.listen(PORT, () => {
})

const io = new Server(ser, {
    pingTimeout: 60000,
    cors: {
        origin: process.env.FRONTEND_URL
    },
});
io.on("connection", (socket) => {
})

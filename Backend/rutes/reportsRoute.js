import express from "express";
import multer from "multer";
import checkAuth from "../middleware/checkAuth.js"
import {
    create,
    getsReports,
    getReport,
    stateReport,
    deleteReport
} from '../controller/reportsController.js'
const storage = multer.diskStorage({
    filename: function(res,file,callback){
        const ext = file.originalname.split('.').pop()
        const filename = Date.now()
        callback(null, `${filename}.${ext}`)
    },
    destination: function(res,file,callback){
        callback(null,'./upload')
    },
})
const upload = multer({storage})
const route = express.Router()
route.route('/')
    .post(upload.single('source'),create)
    .get(checkAuth, getsReports)
route.route('/:id')
    .get(getReport)
    .put(stateReport)
    .delete(deleteReport)           
export default route
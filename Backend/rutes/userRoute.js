import express from 'express'
import {
    logUp,
    auth,
    confirm,
    forgotPass,
    confirmToken,
    newPassword,
    profile
} from '../controller/userController.js'
import checkAuth from '../middleware/checkAuth.js'
const route = express.Router()

route.post('/', logUp)
route.post('/login', auth)
route.get('/confirm/:token', confirm)
route.post('/forgot-pass', forgotPass)
route.route('/forgot-pass/:token').get(confirmToken).post(newPassword)
route.get('/profile', checkAuth, profile)
export default route
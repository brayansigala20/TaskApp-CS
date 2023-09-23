import Users from "../models/Users.js"
import idGen from '../helpers/idGen.js'
import genToken from "../helpers/jsonWebToken.js"
import { emailDeliveryAuth } from "../helpers/emailDelivery.js"
const logUp = async (req, res) => {
    const { email, password, name } = req.body
    const userFind = await Users.findOne({ email })
    try {
        if (userFind) {
            const err = new Error('Este email ah sido utilizado previamente!!')
            return res.status(400).json({ msg: err.message })
        }
        const user = await new Users({ email, password, name })
        user.token = idGen()
        const userdb = await user.save()
        res.json({ msg: "Se ah envido token de confirmacion a tu correo!!" })

        emailDeliveryAuth(userdb)
    }
    catch (error) {
        console.log(error)
    }
}
const auth = async (req, res) => {
    const { email, password } = req.body
    const userFind = await Users.findOne({ email })
    if (!userFind) {
        const err = new Error('Usuario no registrado!!')
        return res.status(404).json({ msg: err.message })
    }
    if (!userFind.confirm) {
        const err = new Error('Usuario no autenticado!!')
        return res.status(400).json({ msg: err.message })
    }
    if (await userFind.comparePassword(password)) {
        res.json({
            _id: userFind._id,
            email: userFind.email,
            name: userFind.name,
            token: genToken(userFind._id)
        })
    } else {
        const err = new Error('Contraseña invalida!!')
        return res.status(400).json({ msg: err.message })
    }
}
const confirm = async (req, res) => {
    const { token } = req.params
    const userFind = await Users.findOne({ token })
    if (!userFind) {
        const err = new Error('Usuario no valido!!')
        return res.status(401).json({ msg: err.message })
    }
    try {
        userFind.confirm = true
        userFind.token = ""
        await userFind.save()
        res.json({ msg: 'Usuario confirmado!!' })
    } catch (error) {
        console.log(error)
    }
}
const forgotPass = async (req, res) => {
    const { email } = req.body
    const userFind = await Users.findOne({ email })
    if (!userFind) {
        const err = new Error('Usuario no valido!!')
        return res.status(401).json({ msg: err.message })
    }
    if (!userFind.confirm) {
        const err = new Error('Usuario no autenticado!!')
        return res.status(401).json({ msg: err.message })
    }
    try {
        userFind.token = idGen()
        await userFind.save()
        res.json({ msg: 'Se ah enviado un mensage a tu correo!!' })
    } catch (error) {
        console.log(error)
    }
}
const confirmToken = async (req, res) => {
    const { token } = req.params
    const userFind = await Users.findOne({ token })
    if (userFind) {
        res.json({ msg: 'Token valido' })
    }
    else {
        const err = new Error('Usuario no valido!!')
        return res.status(401).json({ msg: err.message })
    }
}
const newPassword = async (req, res) => {
    const { token } = req.params
    const { password } = req.body
    const userFind = await Users.findOne({ token })
    if (!userFind) {
        const err = new Error('Usuario no valido!!')
        return res.status(401).json({ msg: err.message })
    }
    else if (!userFind.confirm) {
        const err = new Error('Usuario no validado!!')
        return res.status(403).json({ msg: err.message })
    }
    else {
        userFind.password = password;
        userFind.token = ""
        try {
            await userFind.save()
            res.json({ msg: 'La contraseña se modifico con exito!!' })
        } catch (error) {
            console.log(error)
        }
    }
}
const profile = async (req, res) => {
    res.json(req.user)
}

export {
    logUp,
    auth,
    confirm,
    forgotPass,
    confirmToken,
    newPassword,
    profile
}
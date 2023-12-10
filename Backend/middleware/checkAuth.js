import jwt from 'jsonwebtoken'
import Users from '../models/Users.js';
const checkAuth = async (req, res, next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = await req.headers.authorization.split(' ')[1]
            const decoded = await jwt.verify(token, process.env.JWT_WORD)
            req.user = await Users.findById(decoded.id).select("-password -confirm -token -createdAt -updatedAt -__v")
            return next()
        } catch (error) {
            return res.json({ msg: 'Token no encontrado!!' })
        }
    }
    if (!token) {
        const err = new Error('Token no valido!!')
        return res.json({ msg: err.message })
    }
    next()
}
export default checkAuth
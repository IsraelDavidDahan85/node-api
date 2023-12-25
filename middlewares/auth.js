import sequelize from 'sequelize'
import { User } from '../database/index.js'
import jwt from 'jsonwebtoken'

const auth = async (req, res, next) => {
    let token = req.headers['authorization']
    if (!token) {
        throw new Error('No token provided')
    }
    try {
        token = token.replace('Bearer ', '')
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const { id } = decoded
        const user = await User.findOne({ where: { id } })
        if (!user) {
            throw new Error('Invalid token')
        }
        req.user = user
        req.token = token
    } catch (err) {
        throw new Error('Invalid token')
    }

    
    return next()
}

export default auth
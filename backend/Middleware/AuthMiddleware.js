const UserModel = require("../Model/UserModel")

const Jwt = require("jsonwebtoken")

exports.userPrivacy = async (req, res, next) => {

    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
            const token = req.headers.authorization.split(' ')[1]
            const decode = Jwt.verify(token, process.env.JWT_KEY)
            const findUser = await UserModel.findById(decode._id)
            if (!findUser) {
                res.status(401).send({ message: "User not valid login agin !" })
            } else {
                req.user = findUser
                next()
            }
        } catch (error) {
            res.status(401).send({ message: "Invalid User login agin !" })
        }
    } else {
        res.status(401).send({ message: "User unauthorize login agin !" })
    }
}

exports.adminPrivacy = async (req, res, next) => {
    if (!req.user.isAdmin) {
        res.status(400).send({ message: "User not allow" })
    } else {
        next()
    }

}
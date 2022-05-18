const Jwt = require("jsonwebtoken")

exports.generateToken = (_id) => {
    return Jwt.sign({ _id }, process.env.JWT_KEY, {
        expiresIn: "90d"
    })
}
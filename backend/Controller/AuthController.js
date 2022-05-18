const userModel = require("../Model/UserModel")
const { generateToken } = require("../Helpers/GenerateToken")
const bcrypt = require("bcryptjs")


// Register
exports.register = async (req, res) => {
    const { name, email, password } = req.body
    if (!name || !email || !password) return res.status(400).send({ message: "Invalid information !!" })

    try {
        const emailValid = email.trim().toLowerCase()
        const findUser = await userModel.findOne({ email: emailValid })
        const hashPass = await bcrypt.hash(password.toString(), 10)
        if (!findUser) {
            await userModel.create({ name: name.trim(), email: emailValid, password: hashPass })
            res.status(200).send({ message: "Register successfully " })
        } else {
            res.status(400).send({ message: "User already registered !!" })
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}


// Login 
exports.login = async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) return res.status(400).send({ message: "Invalid information !!" })
    try {
        const findUser = await userModel.findOne({ email: email.trim().toLowerCase() })
        if (findUser && await bcrypt.compare(password.toString(), findUser.password)) {
            const { password, __v, address, _id, createdAt, updatedAt, email, isAdmin, ...others } = findUser._doc
            res.status(200).send({ ...others, token: generateToken(findUser._id) })
        } else {
            res.status(400).send({ message: "Email or Password is invalid !!" })
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}




// Get Profile Info
exports.userProfile = async (req, res) => {
    const { __v, createdAt, updatedAt, password, ...other } = req.user._doc
    res.send(other)
}
const router = require("express").Router()
const { userPrivacy, adminPrivacy } = require("../Middleware/AuthMiddleware")
const { register, login, userProfile } = require("../Controller/AuthController")


router.post("/register", register)
router.post("/login", login)
router.get("/profile", userPrivacy, userProfile)


module.exports = router
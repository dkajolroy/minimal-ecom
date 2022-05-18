const { insertProduct, getAllProduct, deleteProduct, viewProduct } = require("../Controller/ProductController")
const secure = require('../Middleware/AuthMiddleware')
const router = require("express").Router()

router.route("/product")
    .post(secure.userPrivacy, secure.adminPrivacy, insertProduct)
    .get(getAllProduct)
router.delete("/product/:_id", secure.userPrivacy, secure.adminPrivacy, deleteProduct)
router.get("/product/:_id", viewProduct)


module.exports = router
const ProductModel = require("../Model/ProductModel")


exports.insertProduct = async (req, res) => {

    try {
        await ProductModel.create({
            ...req.body, createdBy: req.user._id
        })
        res.status(201).send({ message: "Product added successfully" })
    } catch (error) {
        res.status(201).send(error)
    }
}




// get all Product
exports.getAllProduct = async (req, res) => {
    try {
        const products = await ProductModel.find().sort({ createdAt: -1 })
        res.status(200).send(products)
    } catch (error) {
        res.status(500).send(error._message)
    }
}



// get all Product
exports.deleteProduct = async (req, res) => {

    try {
        const findProduct = await ProductModel.findById(req.params._id)
        if (!findProduct) {
            res.status(400).send({ message: "Product unavailable" })
        } else {
            await ProductModel.findByIdAndDelete(req.params._id)
            res.status(200).send({ message: "Delete successfully" })
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

//View Product
exports.viewProduct = async (req, res) => {
    try {
        const findProduct = await ProductModel.findById(req.params._id)
        if (findProduct) {
            res.status(200).send(findProduct)
        } else {
            res.status(400).send({ message: "Product not found" })
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}
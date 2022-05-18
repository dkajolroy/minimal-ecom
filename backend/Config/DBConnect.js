const mongoose = require("mongoose")

exports.mongoConnect = () => {
    mongoose.connect(process.env.MONGO_URI)
        .then(() => console.log("Database Connected"))
        .catch((error) => console.log(error))
}
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("DB Connected!"))
    .catch((err) => console.log(err));

const userSchema = new mongoose.Schema({
    name: String,
    username: String,
    email: String,
    address: {
        street: String,
        suite: String,
        city: String,
        zipcode: String,
        phone: String,
        website: String
    }
})



module.exports = mongoose.model("Users", userSchema);
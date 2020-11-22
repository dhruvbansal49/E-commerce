const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    username: String,
    email_id: String,
    password: String,
    cart: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "products"
    }]
});

module.exports = mongoose.model("customers", customerSchema);
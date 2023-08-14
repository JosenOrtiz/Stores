const mongoose = require('mongoose');

const StoreSchema = new mongoose.Schema({

    name: {
        type: String,
        required : [true, "Store name is required"],
        minlength : [3, "Store name must be atleast 3 characters"]

    },
    number: {
        type: Number,
        required : [true, "Number is required"],
        min : [1, "Number must be greater than zero"]

    },
    openStatus: {
        type: String
        
    }

}, {timestamps:true});

const Store = mongoose.model('Store', StoreSchema)
module.exports = Store

const mongoose = require('mongoose')


let cartSchema = new mongoose.Schema({
    data : {
        type : Array,
        require : true
    }
})

mongoose.model('cart' , cartSchema)
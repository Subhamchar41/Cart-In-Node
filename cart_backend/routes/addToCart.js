const router = require('express').Router();
const mongoose = require('mongoose')
const Carts = mongoose.model('cart')

router.post('/api/addtocart' , (req , res)  => {

    const {data} = req.body

    if(!data){
        return res.status(400).json({message : "Please enter all the field"})
    }

    Carts.findOne().then(saveData => {

        if(saveData){
            saveData.data = data

            saveData.save().then((result) => {
                return res.status(200).json({result})
            }).catch(err => {
                console.log("Error in data update ", err);
            })
        }
        else {
            let cartData = new Carts({
                data
            })

            cartData.save().then((result) => {
                return res.status(200).json({result})
            }).catch(err => {
                console.log("Error in data save ", err);
            })
        }

    })



})

router.get('/api/addtocart' , (req ,res) => {

    Carts.findOne().then(savedData => {

        if(savedData){
            return res.status(200).json({savedData})
        }
        else {
            return res.status(200).json({message : 'No datat available'})
        }
    }).catch(err=> {
        console.log("Error in data save ", err);
    })


})

module.exports = router
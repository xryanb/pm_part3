const {Product}=require('../models/product.model')


//create
module.exports.createProduct=(request,response)=>{
    const{title,price,description}= request.body;
    Product.create({
        title,
        price,
        description
    })
        .then(product=>response.json(product))
        .catch(err=>response.json(err))
}

//get all
module.exports.getAllProducts = (req, res) => {
    Product.find({})
        .then(allProducts => res.json(allProducts))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
    };

//get one
module.exports.getProduct = (request, response) => {
    Product.findOne({_id:request.params.id})
        .then(product => response.json(product))
        .catch(err => response.json(err))
}

//update one
module.exports.updateProduct = (request, response) => {
    Product.findOneAndUpdate({_id: request.params.id}, request.body, {new:true, runValidators:true})
        .then(updatedProduct => response.json({product :updatedProduct}))
        .catch(err => response.json(err))
}

//delete one
module.exports.deleteProduct = (request, response) => {
    Product.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}


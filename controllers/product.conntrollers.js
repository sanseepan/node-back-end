const Product = require('../models/product.models');

exports.product_create = function (req,res) {
    let product  = new Product(
        {
            name:req.body.name,
            description:req.body.description,
            price:req.body.price
        }
    );

    product.save(function(err){
        if (err){
            console.log(err);
            return;
        }

        res.send(product)
    })

};

exports.product_get =function(req, res){
    product.findById(req.params.id, function(err,product){
        if (err) return next(err);
        res.send(product);
    });

    exports.product_update = function(req,res){
        Product.findByIdAndUpdate(req.params.id,{$set:req.body},function(err,product){
            if(err) return next(err);
            res.send({});
        });
    };

    exports.product_delete = function (reg,res) {

        Product.findByIdAndRemove(req.params.id, function(err){
            if(err) return next(err);
            res.send({});

        });

    }
}
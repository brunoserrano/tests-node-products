const Product = require('../models/product.model');

exports.getAll = function (req, res) {
    Product.find().exec()
        .then(products => {
            res.send({ success: true, count: products.length, data: products });
        })
        .catch(err => {
            res.send({ success: false, error: err });
        })
}

exports.get = function(req, res) {
    Product.findById(req.params.id, function (err, product) {
        if (err) return next(err);
        res.send({ success: true, data: product});
    })
}

exports.create = function(req, res) {
    let product = new Product(
        {
            name: req.body.name,
            price: req.body.price
        }
    );

    product.save(function (err) {
        if (err) {
            return next(err);
        }

        res.send({ success: true });
    })
}

exports.update = function(req, res) {
    Product.findByIdAndUpdate(req.params.id, {$set: req.body}, function(err, product) {
        if (err) return next(err);
        res.send({ success: true, data: product });
    });
}

exports.delete = function(req, res) {
    Product.findByIdAndDelete(req.params.id, function(err, product) {
        if (err) return next(err);
        res.send({ success: true });
    })
}

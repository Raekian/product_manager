const ProductController = require('../controllers/product.controller');

module.exports = function(app){
    app.get('/api', ProductController.index);
    app.post('/api/newproduct', ProductController.createProduct);
    app.get('/api/allproducts', ProductController.findProducts);
    app.get('/api/product/:_id', ProductController.findOneProduct);
    app.delete('/api/delete/:_id', ProductController.deleteProduct);
    app.put('/api/update/:_id', ProductController.updateProduct)
}
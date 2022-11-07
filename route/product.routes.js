const productControllers = require("../controller/product.controllers");

module.exports=(apps)=>{

    //create product api
    apps.post("/ecom/api/v1/product",productControllers.create);
    //get product using id
    apps.get("/ecom/api/v1/product/:id",productControllers.getOne);
}
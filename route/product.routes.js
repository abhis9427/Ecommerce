const productControllers = require("../controller/product.controllers");

module.exports = (apps) => {
  //create product api
  apps.post("/ecom/api/v1/product", productControllers.create);
  //get product using id
  apps.get("/ecom/api/v1/product/:id", productControllers.getOne);
  //get all product
  apps.get("/ecom/api/v1/products", productControllers.getAll);
  //get all by categoryId
  apps.get("/ecom/api/v1/products/:id", productControllers.getByCategory);
  //update by id
  apps.put("/ecom/api/v1/product/:id", productControllers.update);
  //delete by id
  apps.delete("/ecom/api/v1/product/:id", productControllers.delete);
};

const categoryControllers = require("../controller/category.controllers")


module.exports =(apps)=>{
    
    //create a new category
    apps.post("/ecom/api/v1/category",categoryControllers.create)
    //get all catagory
    apps.get("/ecom/api/v1/category",categoryControllers.getAll)
    //get by id
    apps.get("/ecom/api/v1/category/:id",categoryControllers.getOne)
    //update by id
    apps.put("/ecom/api/v1/category/:id",categoryControllers.update)
}
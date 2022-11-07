const db = require("../model");
const Product = db.Product;

exports.create = (req, res) => {
  const { name, description, cost, categoryId } = req.body;

  if (!name) {
    res.status(400).send({ message: "name cannot be empty" });
  }
  if (!cost) {
    res.status(400).send({ message: "cost cannot be empty" });
  }
  if (!categoryId) {
    res.status(400).send({ message: "categoryId cannot be empty" });
  }
  const product = {
    name: name,
    description: description,
    cost: cost,
    categoryId: categoryId,
  };

  Product.create(product)
    .then((product) => {
      console.log(`product with name ${product.name} created sucessfully `);
      res.status(201).send(product);
    })
    .catch((err) => {
      res.status(500).send({ message: "Somthing went wrong " });
    });
};
exports.getOne = (req, res) => {
  const productID = req.params.id;

  Product.findByPk(productID)
    .then((product) => {
      if (!product) {
        res
          .status(400)
          .send({ message: `category with ${productID} dosent exist ` });
      }
      res.send(product);
    })
    .catch((err) => {
      res.status(500).send({ message: "Somthing went wrong" });
    });
};
exports.getAll = (req, res) => {};
exports.getByCategory = (req, res) => {};
exports.update = (req, res) => {};
exports.delete = (req, res) => {};

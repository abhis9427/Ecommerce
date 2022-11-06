const db = require("../model");
const Category = db.Category;

exports.create = (req, res) => {
  const { name, description } = req.body;

  if (!name) {
    res.status(400).send({ message: "name cannot be empty" });
  }
  const category = {
    name: name,
    description: description,
  };

  Category.create(category)
    .then((category) => {
      console.log(`category with name ${category} created`);
      res.status(201).send(category);
    })
    .catch((err) => {
      res.status(500).send({ message: "Somthing went wrong" });
    });
};

exports.getAll = (req, res) => {
  Category.findAll()
    .then((categories) => {
      res.send(categories);
    })
    .catch((err) => {
      res.status(500).send({ message: "Somthing went wrong" });
    });
};

exports.getOne = (req, res) => {
  const categoryId = req.params.id;

  Category.findByPk(categoryId)
    .then((category) => {
      if (!category) {
        res
          .status(400)
          .send({ message: `category with ${categoryId} dosent exist ` });
      }
      res.send(category);
    })
    .catch((err) => {
      res.status(500).send({ message: "Somthing went wrong" });
    });
};

exports.update = (req, res) => {
  const categoryId = req.params.id;
  const { name, description } = req.body;

  const category = {};

  if (name) {
    category.name = name;
  }
  if (description) {
    category.description = description;
  }

  Category.update(category, {
    where: { id: categoryId },
  })
    .then((updatedCategory) => {
      res.send(updatedCategory);
    })
    .catch((err) => {
      res.status(500).send({ message: "Somthing went wrong" });
    });
};

exports.delete=(req,res)=>{

    const categoryId = req.params.id;

    Category.destroy({
        where:{
            id:categoryId
        }
    }).then((data)=>{
        res.send({message:" data deleted "})
    }).catch((err) => {
        res.status(500).send({ message: "Somthing went wrong" });
      });

}

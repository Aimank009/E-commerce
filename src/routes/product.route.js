const express=require("express");
const router=express.Router();

const productController=require("../controller/product.controller.js");
const {authenticate}=require("../middleware/authenticate.js")

router.post("/",authenticate,productController.getAllProducts);
router.delete("/id/:id",authenticate,productController.findProductById);

module.exports=router;
const{CreateOrder,GetOrder,GetOrderById,UpdateOrder,deleteOrder} =require('./order.controller')

const router =require('express').Router();
const {checkToken} =require('/Users/apple/code/restaurant-system/middleware/token.validation.js');

router.post("/",checkToken,CreateOrder);
router.get("/",checkToken,GetOrder);
router.get("/:id",checkToken,GetOrderById);
router.patch("/:id",checkToken,UpdateOrder);
router.delete("/:id",checkToken,deleteOrder);



module.exports=router;
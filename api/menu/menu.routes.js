
const{CreateMenu,GetMenu,GetMenuById, UpdateMenu,deleteMenu} =require('./menu.controller')

const router =require('express').Router();
const {checkToken} =require('/Users/apple/code/restaurant-system/middleware/token.validation.js');

router.post("/",CreateMenu);
router.get("/",checkToken,GetMenu);
router.get("/:id",checkToken,GetMenuById);
router.patch("/:id",checkToken,UpdateMenu);
router.delete("/:id",checkToken,deleteMenu);




module.exports=router;
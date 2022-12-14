const{CreateUser,getuser,getuserbyemail,login,deleteUser,UpdateUser} =require('./user.controller')

const router =require('express').Router();
const {checkToken} =require('/Users/apple/code/restaurant-system/middleware/token.validation.js');


router.post("/",CreateUser);
router.get("/",getuser);
router.get("/:email",getuserbyemail);
router.delete("/:id",checkToken,deleteUser);
router.patch("/:id",checkToken,UpdateUser);
router.post("/login",login)




module.exports=router;
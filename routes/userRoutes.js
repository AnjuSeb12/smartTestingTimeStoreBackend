const express=require("express");
const { postSmartRegister, postSmartLogin, getAllUsersList, deleteUserDetail } = require("../controllers/userController");
const { verifyToken } = require("../middlewares/auth");
const router=express.Router();




router.route('/smartregister').post(postSmartRegister);
router.route('/smartlogin').post(postSmartLogin);
router.route('/users').get(verifyToken,getAllUsersList);
router.route('/userdelete/:id').delete(deleteUserDetail);



module.exports=router;
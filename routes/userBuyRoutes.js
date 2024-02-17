const express=require("express");
const { BuynowAdd, getAllOrderList, deleteUserOrder, getUserDetailByid } = require("../controllers/buyuserdetails");
const { verifyToken } = require("../middlewares/auth");




const router=express.Router();










router.route('/buynowadd').post(BuynowAdd);
router.route('/orderlist').get(verifyToken,getAllOrderList);
router.route('/orderdelete/:id').delete(deleteUserOrder);
router.route('/userorderone/:id').delete(getUserDetailByid);

// router.route('/orderupdate/:id').put(updateOrderDetails);

module.exports=router;
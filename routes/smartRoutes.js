const express=require("express");

const {smartAdd, getSmartAdd, getSmartDetails}=require("../controllers/smartController");
const upload=require("../middlewares/fileUpload");
const { updateOrderDetails } = require("../controllers/buyuserdetails");
const router=express.Router();









router.route('/smartadd').post(upload.single('photograph'),smartAdd );
router.route('/smartadds').get(getSmartAdd);
router.route('/smartdetails/:id').get(getSmartDetails);

module.exports=router;

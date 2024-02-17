const BuyuserDetails=require("../models/buyModel");
exports.BuynowAdd = async (req,res) => {
    const {productname,fullname,address,number} = req.body;

  
   
    try {
        const buyUserDetails = await BuyuserDetails.create({
            productname,
            fullname,
            address,
            number,
            
        });
        if (!buyUserDetails) {
            return res.status(500).json({
                success: false,
                message: "Failed!",

            });
        }
        res.status(201).json({
            success: true,
            message: "Order Placed!",
            buyUserDetails


        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });

    }

}
exports.getAllOrderList=async (req,res) => {


        try {
            const orders=await BuyuserDetails.find();
          
            if(!orders){
                return res.status(500).json({
                    success:false,
                    message:"Orders not found!"
                });
            }
            res.status(200).json({
                success:true,
                orders
            });
            
        } catch (error) {
            res.status(500).json({
                success:false,
                message:error.message
            });
            
        }
    }
    exports.deleteUserOrder = async (req,res) => {
        const {id}=req.params;
        try {
            const order=await BuyuserDetails.findByIdAndDelete(id);
            if(!order){
                return res.status(404).json({
                    success:false,
                    message:"Order not Found",
                    
                });
            }
            res.status(200).json({
                success:true,
                message:"Order Deleted Successfully"
              
                
            });
    
    
        } catch (error) {
            res.status(500).json({
                success:false,
                message:error.message
            });
        
        }
    }
    exports.updateOrderDetails =async (req,res) => {
        const userId=req.params.id;
        const {fullname,address,number}=req.body
        try{
            const updateOrder=await BuyuserDetails.findById(userId);
            if(!updateOrder){
                return res.status(404).json({
                    success:false,
                    message:"User not Found",
                    updateOrder
                });
            }
            updateOrder.fullname=fullname;
            updateOrder.address=address;
            updateOrder.number=number;
            updateOrder.save();
            res.status(200).json({
                success:true,
                message:"order details Updated",
                updateOrder
            });
        
        }catch(error){
            res.status(500).json({
                success:false,
                message:error.message
            });
        
        }
        
        
        
        }
        exports.getUserDetailByid= async (req,res) => {
            const userId=req.params.id;
            try {
                const userOrder=await BuyuserDetails.findById(userId);
                if(!userOrder){
                    return res.status(404).json({
                        success:false,
                        message:"Order not Found",
                        
                    });
                }
                res.status(200).json({
                    success:true,
                  
                    userOrder
                });
        
        
            } catch (error) {
                res.status(500).json({
                    success:false,
                    message:error.message
                });
            
            }
        }
    


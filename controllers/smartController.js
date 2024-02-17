const Smartwatches=require("../models/smartModel");




exports.smartAdd = async (req,res) => {
    const {name,details,amount} = req.body;

    const photograph = req.file.path;
   
    try {
        const smart = await Smartwatches.create({
            name,
            details,
            amount,
            photograph
        });
        if (!smart) {
            return res.status(500).json({
                success: false,
                message: "Details Added Failed!",

            });
        }
        res.status(201).json({
            success: true,
            message: "Details Added Successfully!",
            smart


        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });

    }




}
exports.getSmartAdd = async (req, res) => {
    try {
        const smartwatches = await Smartwatches.find();
        if (!smartwatches) {
            return res.status(500).json({
                success: false,
                message: "SmartWatches not Found!",

            });
        }
        res.status(200).json({
            success: true,
            smartwatches

         


        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message

        });

    }
}
exports.getSmartDetails= async (req,res) => {
    const smartId=req.params.id;
    try {
        const user=await Smartwatches.findById(smartId);
        if(!user){
            return res.status(404).json({
                success:false,
                message:"Details not Found",
                user
            });
        }
        res.status(200).json({
            success:true,
          
            user
        });


    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        });
    
    }
}
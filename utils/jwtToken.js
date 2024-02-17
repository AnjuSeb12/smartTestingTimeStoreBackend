const jwt=require("jsonwebtoken");
const cookieParams = { httpOnly: true, sameSite: "none", secure: true };


exports.getToken =(req,res) => {
    const options={
    id:req.user._id,
    time:Date.now()

}
const token= jwt.sign(options,process.env.JWT_SECRET_KEY,{expiresIn:'5min'});

if(!token){
    return  res.status(500).json({
        success:false,
        message:"Token generation failed",
        isAuthenticated:false,
})
}
res.status(200).cookie("token",token,cookieParams).json({
    success:true,
    user:req.user,
    token,
    message:"Logged in Successfully !",
    isAuthenticated:true,
});

}
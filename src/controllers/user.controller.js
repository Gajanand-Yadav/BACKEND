import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async(req,res)=>{
    // console.log("register route hit")
    // res.send("Register route working")
    res.status(200).json({
        message:"ok"
    })
})

export {registerUser}

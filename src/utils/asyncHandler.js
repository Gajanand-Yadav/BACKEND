const asyncHandler=(requestHandler)=>{
    (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next))
        .catch((error)=> next(error))
    }
}


export {asyncHandler}

const asyncHandler = (func) => async (req,res,next)=>{
    try{
        await func(req,res,next)
    }
    catch(error){
        res.satuts(error.code|| 500).json({
            message: error.code,
            success:false
        })
    }

}
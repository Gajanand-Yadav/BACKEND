class apiError extends Error{
    constructor(
        statusCode,
        error=[],
        message="Something went wrong",
        stack=""
    ){
        super(message)
        this.statusCode=statusCode
        this.data=null
        this.message=message
        this.error=this.errors
        this.success=false
        
        if(stack){
            this.stack=stack
        }else{
         Error.captureStackTrace(this,this.constuctor)
        }
    }
}
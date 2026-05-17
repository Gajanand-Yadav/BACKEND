class apiError extends Error{
    constructor(
        statusCode,
        error=[],
        message="Something went wrong",
        statck=""
    ){
        super(message)
        this.statusCode=statusCode
        this.data=null
        this.message=message
        this.error=this.errors
        this.success=false
        
        if(statck){
            this.stack=statck
        }else{
         Error.captureStackTrace(this,this.constuctor)
        }
    }
}
import mongoose from "mongoose"
import {Db_Name} from "../constants.js"

export const ConnectDB= async()=>{
    try{
        const connectionInstance=await mongoose.connect(`${process.env.MONGO_URL}/${Db_Name}`)
        console.log(`/n Mongo Connected !! DB HOST ${connectionInstance.connection.host}`)
    }
    catch(error){
        console.log("MONGODB connection FAILED", error)
        process.exit(1)
    }
}

// export default ConnectDB
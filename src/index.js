// require('dotenv').config({path:'./env'})
import dotenv from "dotenv"
import {ConnectDB} from "./db/index.js"

dotenv.config({path:'./env'})

ConnectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server running at PORT: ${process.env.PORT}`)
    })
})
.catch((error)=>{
    console.log("MONGODB CONNECTION FAILED !!!",error)
})















/*
import express from "express"
const app= express()

;(async() => {
    try{
        await mongoose.connect(`${process.env.MONGO_URL}/${Db_Name}`)
        app.on("error", (error)=>{
            console.log("error: ",error)
            throw error
        })

        app.listen(process.env.PORT, ()=>{
            console.log(`App is listening on port: ${process.env.PORT}`)
        })

    }
    catch(error){
        console.log("Error: ", error)
        throw error
    }
} )() */
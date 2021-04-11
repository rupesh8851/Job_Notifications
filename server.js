const express=require('express')

const app=express()
app.use(express.urlencoded({extended:true}))

app.use("/abc",express.static(__dirname+"/public"))
app.get('/',(req,res)=>{res.send("Hello India the world greateat power ")})

app.listen(4443,()=>{console.log("seryoyoyoyyooy")})


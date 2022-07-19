
import express from 'express'
import mongoose from 'mongoose'
import Messages from './dbmessages.js'
const app=express()
const port=process.env.PORT || 9000
const connection_url='mongodb+srv://Rv:HBtsowwvrI97vo68@cluster0.mujef41.mongodb.net/?retryWrites=true&w=majority'
//db config
mongoose.connect(connection_url,{
     useNewUrlParser:true,
     useUnifiedTopology:true


})
//api route
app.get('/',(req,res)=>res.status(200).send('Helo World'))
app.get('/messages/sync',(req,res)=>
  Messages.find((err,data)=>{
    if (err){
        res.status(500).send(err)
    }
    else{
        res.status(200).send(data)
    }
  }
)
)
//middleware
app.use(express.json) 
//listen
app.listen(port,()=>console.log(`Listening on localHost : ${port}` ))
//posting messages
app.post('/messages/new',(req,res)=>{
   const dbMessage = req.body
    Messages.create(dbMessage,(err,data)=>{
        if(err){
            res.status(500).send(err)
        }
        else{
            res.status(201).send(`new message created: \n ${data}`)
        }
    })


})



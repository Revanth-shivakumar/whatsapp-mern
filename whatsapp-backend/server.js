
import express from 'express'
import mongoose from 'mongoose'
import Messages from './dbmessages.js'
import Pusher from 'pusher'
const app=express()
const port=process.env.PORT || 9000
const pusher = new Pusher({
  appId: "1455867",
  key: "0acebd83bf33afa91b46",
  secret: "ae4cc2dc564a805209d7",
  cluster: "us3",
  useTLS: true
});




const connection_url=
mongoose.connect(connection_url,{
     useNewUrlParser:true,
     useUnifiedTopology:true


})
const db =mongoose.connection;
db.once('open',()=>{
  console.log("db Connected");
  const msgCollection=db.collection("messageContent");
  const changeStream = msgCollection.watch();
  changeStream.on("change",(change)=>{
  console.log(" A change Occured",change);

  if(change.operationType === 'insert'){
    const messageDetails=change.fullDocument;
    pusher.trigger('messages','inserted',
    {
      name: messageDetails.name,
      message : messageDetails.messsage,
    }
    );
  }else{
    console.log("error triggering pusher")
  }
  });
});
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
app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader("Access-Control-Allow-Headers","*");
  next();
});
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



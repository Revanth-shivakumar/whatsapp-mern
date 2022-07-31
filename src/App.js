
import './App.css';
import SelectBar from './Select_bar';
import Chat from './Chat';
import { useEffect, useState } from 'react';
import Pusher from 'pusher-js';
import axios from './axios';
function App() {

  const [messages,setMessages]=useState([]);
  useEffect(()=>{
    axios.get('messages/sync')
    .then (response=>{
      setMessages(response.data);
    })
  },[])
  useEffect(()=>{
    const pusher = new Pusher('0acebd83bf33afa91b46', {
      cluster: 'us3'
    });

    var channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage)=> {
      setMessages([...messages,newMessage]);
    });

  },[messages])
  return (
    <div className="App">
      
      <div className="App_body">
       <SelectBar/>
       <Chat messages={messages}/>
      </div>

      
    </div>

   

     
  );
}

export default App;

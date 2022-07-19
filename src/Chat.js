import { AttachFile, InsertEmoticon, MoreVert, SearchOutlined } from '@mui/icons-material';
import MicIcon from '@mui/icons-material/Mic';
import { Avatar, IconButton } from '@mui/material';
import React from 'react'
import './Chat.css';

function Chat() {
  return (
    <div className='chat'>
       
     <div className='chatheader'>  
     <Avatar/>
        <div className='chatheader_info'>
          <h1>Room Name</h1>
          <p>Last Seen at .....</p>
        </div>

        <div className='chatheader_additional'>
          <IconButton>
            <SearchOutlined/>
          </IconButton>
          <IconButton>
            <AttachFile/>
          </IconButton> 
          <IconButton>
            <MoreVert/>
          </IconButton>        
        


        </div>
      </div>
      <div className='chat_body'>

         
          {/* try converting this into a component */}
            <p className='chat_message'>
          <span className='chat_name'>Mark</span>
          This is a message
          <span className='chat_time'>
            {new Date().toUTCString()}
          </span>
          
            </p> 

        <p className='chat_message chat_receiver'>
          <span className='chat_name'>Manager</span>
          This is a message
          <span className='chat_time'>
            {new Date().toUTCString()}
          </span>
          
         </p> 


       <div className='chat_footer'>
        <InsertEmoticon/>
        <form>

          <input placeholder='Type a Message ...' type="text"/>
          <button  type="submit">

            Send
          </button>
          
          
        </form>
        <MicIcon/>       
        
        </div>  
      </div>
   </div>
  )
}

export default Chat

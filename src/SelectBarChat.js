import { Avatar } from '@mui/material';
import React from 'react';
 import "./SelectBarChat.css";
// individual componenets in the chat bar
// ie each contact and chat as a component

function SelectBarChat() {
  return (
    <div className="selectbarChat" >
        <Avatar/>
        {/* contains name and other details  */}
       <div className='selectbar_info'>
            <h2>Name</h2>
            <p>Last Message</p>
       </div>
      
    </div>
  )
}

export default SelectBarChat

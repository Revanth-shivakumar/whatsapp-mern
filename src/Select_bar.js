import React from 'react'
import './select_bar.css'
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import { IconButton } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Avatar } from '@mui/material';
import { SearchOutlined } from '@mui/icons-material';
import SelectBarChat from './SelectBarChat';


function SelectBar() {
  return (
    <div className="selectbar">
      <div className="selectbar_header">
         <div className="selectbar_picture">
           <Avatar src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/330px-Elon_Musk_Royal_Society_%28crop2%29.jpg'/>
         </div>

         <div className="selectbar_other">
           {/* contains status,chat and options */}
            <IconButton>
              <DonutLargeIcon/>
            </IconButton>
             <IconButton>
              <ChatIcon/>
            </IconButton>
             <IconButton>
              <MoreVertIcon/>
            </IconButton>
            
         </div>

      </div>
      <div className='selectbar_search'>
       <div className='selectbar_search_space'>
           <SearchOutlined />
           <input placeholder='Search or Start new chat' type='text'/>
           
       </div>
        
      </div>
      <div className="selectbar_chats">
        <SelectBarChat/>
        <SelectBarChat/>
        <SelectBarChat/>
        
      </div>

    </div>
  )
}

export default SelectBar

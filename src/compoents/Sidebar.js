import React from 'react'
import './Sidebar.css'
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import {Avatar, IconButton} from '@mui/material'
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchOffIcon from '@mui/icons-material/SearchOff';
import SidebarChat from './SidebarChat';

function Sidebar() {
  return (
    <div className='sidebar'>
         <div className="sidebar_header">
            <Avatar src = "https://media-exp1.licdn.com/dms/image/D4D03AQFdnRwu0mSYTQ/profile-displayphoto-shrink_800_800/0/1668362177284?e=1675296000&v=beta&t=kEAw-PtpPNpRYoI43fLVEyfJ4eN4E7NofkB4EIib3Rc" />
            <div className="sidebar_headerRight">
                <IconButton>
                <DonutLargeIcon />
                </IconButton>
                <IconButton>
                <ChatIcon />
                </IconButton>

                <IconButton>
                <MoreVertIcon />
                </IconButton>
                
            </div>
         </div>
         <div className='sidebar_search'>
                <div className="sidebar__searchContainer">
                    <SearchOffIcon />
                    <input type="text" placeholder='search or start new chat' />
                </div>
            </div>

            <div className="sidebar_chat">
                <SidebarChat /> 
                <SidebarChat /> 
                <SidebarChat /> 
            </div>
   </div>
  )
}

export default Sidebar
import React from 'react';
import './Sidebar.css';
import {Avatar, IconButton} from '@material-ui/core';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import SidebarChat from './SidebarChat';

function Sidebar() {
  return (
    <div className="sidebar">

     <div className="sidebar_header">
        <Avatar/>
        <div className="sidebar_headerRight">
          <IconButton><DonutLargeIcon/></IconButton>
          <IconButton><ChatIcon/></IconButton>
          <IconButton><MoreVertIcon/></IconButton>
        </div>
     </div>
    
     <div className="sidebar__search">
    
       <div classname="sidebar__searchContainer">
       <SearchOutlined/>
       <input className="sidebar_searchInput" placeholder="search or start new chat" type="text"/>
       </div>  
     </div>
     
     
     <div className="sidebar__chats">
      <SidebarChat />
      <SidebarChat />
      <SidebarChat />
      <SidebarChat />
     </div>

    </div>
  )
}

export default Sidebar;

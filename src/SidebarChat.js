import React from 'react';

import './SidebarChat.css';
import {Avatar} from "@material-ui/core";

function SidebarChat() {
  return (
    <div className="sidebarChat">
      <Avatar src="https://avatars.dicebear.com/api/male/john.svg?mood[]=happy" />
      <div className="slidebarChat_info">
        <h2>Room Name</h2>
        <p>last message...</p>
      </div>

    </div>
  )
}

export default SidebarChat;

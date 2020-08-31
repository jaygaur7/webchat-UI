import React from 'react';
import './Chat.css';
import { Avatar, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import {useState} from 'react';
function Chat() {
 const [input,setinput] = useState("");
  const sendMessage = (e)=>{
     e.preventDefault();
     console.log("you typed a message>>>",input)
  }
  return (
    <div className="chat">
      
      <div className= "chat_header">
      <Avatar/>
      <div className="chat_headerInfo">
        <h3>Room Name</h3>
        <p>typing....</p>
      </div>
       <div className="chat__headerRight">
        <IconButton><SearchIcon/> </IconButton>
        <IconButton><AttachFileIcon/> </IconButton>
        <IconButton><MoreVertIcon/> </IconButton>
       </div>
      </div>

      <div className="chat_body">
        
         <p className={`chat_message ${true && `chat_reciever`}`}>
           <span className="chat_name">jay Gaur</span>
           Hey Guys!
           <span className="chat_timeStamp">3:45pm</span>
         </p>
      </div>

      <div className="chat_footer">    
       <IconButton><InsertEmoticonIcon/></IconButton>
       <form action="#" method="get" class="form-example">
       <input value={input} onChange={(e)=>setinput(e.target.value)} placeholder="type a message" type="text"/>
       <button onClick={sendMessage} type="submit">send</button>
       </form>
       <IconButton><MicIcon/></IconButton>
       </div>
    </div>
  )
}

export default Chat;

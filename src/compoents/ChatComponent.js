import {Avatar, IconButton}  from '@mui/material'
import React from 'react'
import './ChatComponent.css'
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchOffIcon from '@mui/icons-material/SearchOff';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';

function ChatComponent() {
  return (
    <div  className='chat'>
        <div className='chat_header'>
            <Avatar />
            <div className="chat__headerInfo">
                <h3>Room Name</h3>
                <p>Last seen at.....</p>
            </div>
            <div className="chat__headerRight">
                <IconButton>
                <SearchOffIcon />
                </IconButton>

                <IconButton>
                <AttachFileIcon />
                </IconButton>

                <IconButton>
                <MoreVertIcon />
                </IconButton>
            </div>
        </div>

        <div className="chat__body">
            <p className='chat_message'>
                <span className='chat_name'>Rico</span>
                This is a message
                <span className='chat_timestamp'>{new Date().toString()}</span>
            </p>

            <p className='chat_message chat_reciever'>
                <span className='chat_name'>Stanly</span>
                This is a message
                <span className='chat_timestamp'>{new Date().toString()}</span>
            </p>

            <p className='chat_message'>
                <span className='chat_name'>Az</span>
                This is a message
                <span className='chat_timestamp'>{new Date().toString()}</span>
            </p>

            <p className='chat_message'>
                <span className='chat_name'>Phaewlll</span>
                This is a message
                <span className='chat_timestamp'>{new Date().toString()}</span>
            </p>

        </div>

        <div className="chat_footer">
            <InsertEmoticonIcon />
            <form>
                <input placeholder='Type a message here'
                type='text' 
                />
                <button type='submit'> Send a Message

                </button >
                <MicIcon />
            </form>
        </div>
    </div>
  )
}

export default ChatComponent
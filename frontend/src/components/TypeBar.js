import Button from '@mui/material/Button';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
import { useState, useEffect, useRef } from 'react'


const TypeBar = ({ user, conversation, setMessages, stompClient }) => {

    var msgCounter = 0;
 

    const sendMessage = () => {
        // Fetch the message using plain DOM manipulation
        var message = document.getElementById("InputId").value;

        var content = JSON.stringify({
            content: message,
            sender: user,
            receiver: conversation
        })

        stompClient.send("/app/chat/" + conversation, {}, content );

        msgCounter = msgCounter + 1;
    }

    return (
        <div>
            <div className={'typebarwrapper'}>
            <Button variant="outlined" onClick={sendMessage}>Send</Button>
            </div>
            <input className={'typebar'}
               id="InputId"
               type={'text'}
               placeholder={'Type a message'}/>

        </div>
    )
}

export default TypeBar;

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
            sender: user,
            receiver: conversation,
            content: message
        })

        stompClient.send("/app/chat/" + conversation, {}, content );

        // Add message to message array in order to print it on screen

       

        var toSend = ({
            sender : user,
            reveiver: conversation,
            content: message
        })

        console.log("Content is : " + toSend)
        
        setMessages(messages => [...messages, toSend]);

        // Reset the input button
        document.getElementById("InputId").setAttribute("value", "");

        // Add message to Database
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

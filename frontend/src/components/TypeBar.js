import Button from '@mui/material/Button';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
import { useState, useEffect } from 'react'


const TypeBar = ({ user, conversation, setMessages }) => {

    var stompClient;
    var msgCounter = 0;

    const socketInit = () => {

        // Using SockJS over Stomp
        var mySocket = new SockJS('http://localhost:8080/chat/' );
        stompClient = Stomp.over(mySocket);
  
        stompClient.connect( {username:user} , function(frame) {
            // setConnected(true);
  /*          console.log('Connected '+ frame);*/
            stompClient.subscribe('/topic/messages/' + user, function(messageOutput)
            { showMessageOutput(JSON.parse(messageOutput.body)); });
         } );
  
  /*       console.log(stompClient);*/
    }
  
    const showMessageOutput= (messageOutput) => {
    setMessages( messageOutput ); // here we should set message array to contain the message. 
  }


  
  useEffect(() => {
      socketInit(); // This effect will make socketInit run only once, because it has an empty dependency array. 
      // (Otherwise the function will run every time something form the array changes state)
  }, []);

    const sendMessage = (e, msgCounter) => {
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

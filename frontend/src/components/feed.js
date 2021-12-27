import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
import TypeBar from './TypeBar';
import Messages from "./Messages";
import Conversations from "./Conversations";
import { useState, useEffect } from 'react'
import Button from '@mui/material/Button';


// For testing, this should come from backend
// The user should be received by the feed as a prop
/*const user = "Thomas";*/

const Feed = ({ user, stompClient }) => {

    // For testing, this should come from backend
    // The conversation tells me to whom the current user is talking right now
    const [conversation, setConversation] = useState({
        id: 80,
        name: "Generic"
    });

    console.log(user)

    const socketInit = () => {

      // Using SockJS over Stomp
      var mySocket = new SockJS('http://localhost:8080/chat/' );
      stompClient = Stomp.over(mySocket);

      stompClient.connect( {username:user} , function(frame) {
          // setConnected(true);
          console.log('Connected '+ frame);
          stompClient.subscribe('topic/messages/' + user, function(messageOutput)
          { showMessageOutput(JSON.parse(messageOutput.body)); });
       } );

       console.log(stompClient);
  }

  const showMessageOutput= (messageOutput) => {
      console.log(messageOutput); // for now
  }

  socketInit();

    // Inside the conversations, the user will click on a certain conversation
    // I must update the conversation variable (the one that tells me to whom I
    // am talking right now, and pass it to the messages.
    // Inside messages, I will get all the messages that belong to that conversation
    // from the backend server
    return (
        <body className={'feed'}>
            <div className={'messagewindow'}>
                <Messages user={user} conversation={conversation} stompClient={stompClient}/>
                <TypeBar user={user} conversation={conversation} stompClient={stompClient}/>
                <Conversations user={user} setConversation={setConversation} stompClient={stompClient}/>
            </div>
        </body>
    )
}

export default Feed;

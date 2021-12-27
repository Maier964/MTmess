/*import * as React from 'react';
import SockJsClient from "react-stomp";
import { TalkBox } from "react-talk";

class Feed extends React.Component{
    constructor(props) {
      super(props);
      // Need to assign user information for TalkBox render
      this.userName = "Jackson";
      this.userId = "123";
      this.state = {
        clientConnected: false,
        messages: []
      };
    }

    onMessageReceive = (message, topic) => {
      this.setState( prevState => (
        {
          messages: [...prevState.messages, message]
        }
       ) );
    }

    sendMessage = (message, selfMessage) => {
      try {
        this.clientRef.sendMessage("/app/chat/" + this.userName, JSON.stringify(selfMessage));
        return true;
      }
      catch (exp){
        return false;
      }
    }

    render() {
      const wsSourceUrl = window.location.protocol + "//" + window.location.host + "/chat";
      return (
        <div>
        <TalkBox topic="messenger" currentUserId={ this.UserId }
          currentUser={ this.UserName } messages={ this.state.messages }
          onSendMessage={ this.sendMessage } connected={ this.state.clientConnected }/>

        <SockJsClient url={ wsSourceUrl } topics={["/topic/messages"]}
          onMessage={ this.onMessageReceive } ref={ (client) => { this.clientRef = client }}
          onConnect={ () => { this.setState({ clientConnected: true }) } }
          onDisconnect={ () => { this.setState({ clientConnected: false }) } }
          debug={ true }/>
      </div>
      );
    }

}

export default Feed;*/
import SockJS from 'sockjs-client'; 
import Stomp from 'stompjs';
import TypeBar from './TypeBar';
import Messages from "./Messages";
import Conversations from "./Conversations";
import { useState, useEffect } from 'react'
import Button from '@mui/material/Button';


// For testing, this should come from backend
// The user should be received by the feed as a prop
const user = "Thomas";

const Feed = (stompClient) => {

    // For testing, this should come from backend
    // The conversation tells me to whom the current user is talking right now
    const [conversation, setConversation] = useState({
        id: 80,
        name: "Generic"
    });


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

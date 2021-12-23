import * as React from 'react';
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

export default Feed;
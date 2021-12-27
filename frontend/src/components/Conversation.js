import SockJS from 'sockjs-client'; 
import Stomp from 'stompjs';

const Conversation = ({ conversation, setConversation}) => {


    var client = null; // declaration of client needs to be global. 
    // (Im not sure if the other components have acess to this, and it should.. (For sending messages))

    const myName = "Maier" // User attributes need to be inherited from parent components ( feed.js )

    const handleSocket = (e) => {
        setConversation(conversation)

        // Using SockJS over Stomp 
        var mySocket = new SockJS('http://localhost:8080/chat/' );
        client = Stomp.over(mySocket);

        client.connect( {username:myName} , function(frame) { 
            // setConnected(true);
            console.log('Connected '+ frame);
            client.subscribe('topic/messages/' + conversation.name, function(messageOutput)
            { showMessageOutput(JSON.parse(messageOutput.body)); });
         } );
    }

    const showMessageOutput= (messageOutput) => {
        console.log(messageOutput);
    }


    // Here, the user should double-click on the conversation
    // The name of the user on which was clicked should
    // "propagate" back towards the feed page, so that it
    // can be passed to the messages
    // We do this by setConversation
    return (
        <div className={"conversation"} onDoubleClick={handleSocket}>
            <h2 className={"conversation_name"}>
                {conversation.name}
            </h2>
        </div>
    )
}

export default Conversation

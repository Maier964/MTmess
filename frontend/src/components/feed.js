import TypeBar from './TypeBar';
import Messages from "./Messages";
import Conversations from "./Conversations";
import { useState, useEffect } from 'react'
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';

const Feed = ({ user}) => {

    var aux = null;

    const [stompClient, setStompClient] = useState([{}]);

    // console.log(user);

    // For saving the names of all the user's friends
    // This should be an array of strings that represent usernames
    const [friendships, setFriendships] = useState([]);

    const [messages, setMessages] = useState([
        {
        sender: " ",
        receiver: " ",
        content: " "
        }
    ]); // array of objects


    // For testing, this should come from backend
    // The conversation tells me to whom the current user is talking right now
    const [conversation, setConversation] = useState([{
        id: 80,
        name: "Generic"
    }]);

    useEffect(() => {
        const getFriendships = async () => {
            const data = await fetchFriendships()
            let aux = [];
            data.map((data) => aux = [...aux, data.user2]);
            setFriendships(aux);
        }
        getFriendships()
    }, [])


    const socketInit = () => {
        // Using SockJS over Stomp
        var mySocket = new SockJS('http://localhost:8080/chat/' );
        aux = Stomp.over(mySocket);
  
        aux.connect( {username:user} , function(frame) {
            // setConnected(true);
  /*          console.log('Connected '+ frame);*/
            aux.subscribe('/topic/messages/' + user, function(messageOutput)
            { 
                showMessageOutput(JSON.parse(messageOutput.body)); 
            });
         } );
        //  console.log("From socket init : "  + aux);
         setStompClient(aux);
    }
  
    const showMessageOutput= (messageOutput) => {
    //setMessages( prevMessages => [...prevMessages, messageOutput]  ); // here we should set message array to contain the message.
    console.log("Before " + messages.content);

    setMessages(messages => [...messages, messageOutput]);

    console.log("After " + messages.content);
  }


  useEffect(() => {
    socketInit(); // This effect will make socketInit run only once, because it has an empty dependency array. 
    // (Otherwise the function will run every time something form the array changes state)
    // console.log(stompClient)
}, []);


    const fetchFriendships = async () => {
        const response = await fetch(`http://localhost:8080/friendship/find?user1=${user}&user2=`)
        try {
            const data = await response.json()
            return data
        }
        catch {
            alert("You don't have any friends")
        }
    }




// Inside the conversations, the user will click on a certain conversation
    // I must update the conversation variable (the one that tells me to whom I
    // am talking right now, and pass it to the messages.
    // Inside messages, I will get all the messages that belong to that conversation
    // from the backend server
    return (
        <body className={'feed'}>
            <div className={'messagewindow'}>
                <Messages user={user} conversation={conversation} stompClient={stompClient} messages={messages}/>
                <TypeBar user={user} conversation={conversation} setMessages={setMessages} stompClient={stompClient}/>
                <Conversations setConversation={setConversation} friendships={friendships} stompClient={stompClient}/>
            </div>
        </body>
    )
}

export default Feed;

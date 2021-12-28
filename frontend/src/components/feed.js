import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
import TypeBar from './TypeBar';
import Messages from "./Messages";
import Conversations from "./Conversations";
import { useState, useEffect } from 'react'
import Button from '@mui/material/Button';

const Feed = ({ user, stompClient }) => {

    console.log(user);

    // For saving the names of all the user's friends
    // This should be an array of strings that represent usernames
    const [friendships, setFriendships] = useState([]);

    const [messages, setMessages] = useState([{}]); // array of json


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
                <TypeBar user={user} conversation={conversation} stompClient={stompClient} setMessages={setMessages}/>
                <Conversations setConversation={setConversation} friendships={friendships} stompClient={stompClient}/>
            </div>
        </body>
    )
}

export default Feed;

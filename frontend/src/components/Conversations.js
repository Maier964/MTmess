import Conversation from "./Conversation";

// For testing, this should come from backend
// Here I should take all the names of the people
// with which the current user has any messages with
const conversations = [
    {
        id: 1,
        name: 'Brad'
    },
    {
        id: 2,
        name: 'Jess'
    },
    {
        id: 3,
        name: 'Roy'
    }
]

const Conversations = ({ user, setConversation , stompClient}) => {
    return (
        <div className={'conversations'}>
            {
                conversations.length > 0 ?
                    conversations.map((conversation) => (
                    <Conversation conversation={conversation} setConversation={setConversation} stompClient={stompClient}/>
                    )) :
                    "You currently don't have any conversations"
            }
        </div>
    )
}

export default Conversations;

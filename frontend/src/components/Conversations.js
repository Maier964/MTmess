import Conversation from "./Conversation";

const Conversations = ({ setConversation, friendships }) => {
    console.log("Conversations: " + friendships + " Length: " + friendships.length)
    return (
        <div className={'friendships'}>
            {
                friendships.length > 0 ?
                    friendships.map((friendship) => (
                    <Conversation friendship={friendship} setConversation={setConversation}/>
                    )) :
                    "You currently don't have any conversations"
            }
        </div>
    )
}

export default Conversations;

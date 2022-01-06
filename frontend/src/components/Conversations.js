import Conversation from "./Conversation";

const Conversations = ({ setConversation, friends }) => {

    return (
        <div className={'friends'}>
            {
                friends.length > 0 ?
                    friends.map((friend) => (
                    <Conversation friend={friend} setConversation={setConversation}/>
                    )) :
                    "You currently don't have any conversations"
            }
        </div>
    )
}

export default Conversations;

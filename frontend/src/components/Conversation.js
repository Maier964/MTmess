
const Conversation = ({ friendship, setConversation}) => {

    console.log("Conversation: " + friendship)
    // Here, the user should double-click on the conversation
    // The name of the user on which was clicked should
    // "propagate" back towards the feed page, so that it
    // can be passed to the messages
    // We do this by setConversation
    return (
        <h2 className={"friendship"} onDoubleClick={() => setConversation(friendship)}>
            {friendship}
        </h2>
    )
}

export default Conversation

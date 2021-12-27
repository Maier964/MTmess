const Conversation = ({ conversation, setConversation}) => {
    // Here, the user should double-click on the conversation
    // The name of the user on which was clicked should
    // "propagate" back towards the feed page, so that it
    // can be passed to the messages
    // We do this by setConversation
    return (
        <div className={"conversation"} onDoubleClick={setConversation(conversation)}>
            <h2 className={"conversation_name"}>
                {conversation.name}
            </h2>
        </div>
    )
}

export default Conversation

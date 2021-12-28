import Message from './Message'

// const messages = [
//     {
//         id: 1,
//         sender: "Thomas",
//         receiver: "Brad",
//         content: "Hi Brad, how's it going with the project?"
//     },
//     {
//         id: 2,
//         sender: "Brad",
//         receiver: "Thomas",
//         content: "Hei Thomas, choosing it was a huge overkill..."
//     },
//     {
//         id: 3,
//         sender: "Thomas",
//         receiver: "Brad",
//         content: "That sucks mate, give it up then."
//     },
//     {
//         id: 4,
//         sender: "Brad",
//         receiver: "Thomas",
//         content: "No way, I will finish this!"
//     }
// ]

// Messages to be loaded from the specific conversation
// A prop 'conversation' should also be passed
const Messages = ({ user, conversation, stompClient, messages }) => {
/*    console.log(conversation.name);*/
    return (
        <div className={'messages'}>
            {
                messages.length > 0 && conversation.name === "Brad" ?  // change this
                    messages.map((message) => (
                        message.sender === user ?
                            <Message message={message} sent={true}/> :
                            <Message message={message} sent={false}/>
                    )) :
                    "You have no messages with this person"  // to be changed to the person's name
            }
        </div>
    )
}

export default Messages;

const Message = ({ message, sent}) => {
    return (
        <div className={`message ${sent ? 'sent' : ''} ${sent ? '' : 'received'}`}>
            <h4>{message.content}</h4>
        </div>
    )
}

export default Message

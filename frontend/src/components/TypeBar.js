import Button from '@mui/material/Button';

const TypeBar = ({ user, conversation, stompClient }) => {


    const sendMessage = (e) => {
        // Fetch the message using plain DOM manipulation
        var message = document.getElementById("InputId").value;

        console.log(stompClient);

        var content = JSON.stringify({
            content: message,
            sender: user,
            receiver: conversation.name
        })
        stompClient.send("/app/chat/" + conversation.name, {}, content );

        console.log(content);
    }

    return (
        <div>
            <div className={'typebarwrapper'}>
            <Button variant="outlined" onClick={sendMessage}>Send</Button>
            </div>
            <input className={'typebar'}
               id="InputId"
               type={'text'}
               placeholder={'Type a message'}/>

        </div>
    )
}

export default TypeBar;

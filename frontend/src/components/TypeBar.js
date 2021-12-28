import Button from '@mui/material/Button';


const TypeBar = ({ user, conversation, setMessages, stompClient }) => {
 

    const sendMessage = () => {
        // Fetch the message using plain DOM manipulation
        var message = document.getElementById("InputId").value;

        var content = JSON.stringify({
            sender: user,
            receiver: conversation,
            content: message
        })

        stompClient.send("/app/chat/" + conversation, {}, content );

        // Add message to message array in order to print it on screen

       

        var toSend = ({
            sender : user,
            receiver: conversation,
            content: message
        })

        console.log("Content is : " + toSend)
        
        setMessages(messages => [...messages, toSend]);


        // Reset the input button
        document.getElementById("InputId").value = ""

        // Add message to Database ( should always work so no error checking/handling here )
        
        // Forge request
        const request = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify( { sender:user , receiver:conversation, content:message } )
        };

        // Send request
        fetch('http://localhost:8080/message/add', request)
            .then( console.log("Added message to db...") )

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

import AddIcon from '@mui/icons-material/Add';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { useState, useEffect } from 'react';






const UserBar = ({ user }) => {

    const [totalUsers, settotalUsers] = useState([{}]);

    // When addButton is 1, the field for adding a friend will show
    const [addButton, setAddButton] = useState(0); 

    const [friendQuery, setFriendQuery] = useState('');

    const wrapperHandler = () => 
    {
        setAddButton(1);
        console.log(addButton);
    }

    const addFriendHandler = () =>
    {
        console.log(friendQuery);
        
        // Add friendship to DB
        const request = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
           body: JSON.stringify( { user1:user , user2:friendQuery} )
            };
        
                    // Send request
            fetch('http://localhost:8080/friendship/add', request)
                .then(  ); // friend will get added in the 'friends' state var from the db on the next render

        
        setAddButton(0);
    }



useEffect(() => {
    let aux = [];
    var i;
    // Simple get request
    fetch('http://localhost:8080/user/find/all') // returns a promise
       .then( function(response) { return response.json(); } ) // ALSO returns a promise ( haha )
       .then( function(rawData){
           for( i = 0; i < rawData.length; i++ )
           {
               aux[i] = rawData[i].name;
           }
       })

    settotalUsers(aux)
}, []);

    return (
        <div className={'userbar'}>
            <h2>{user}
            <PersonAddIcon id="addButton" onClick={wrapperHandler}/></h2>
            {
                addButton === 1 ?
                 ( <div>
                 <Autocomplete id = "AddFriend" /* Nici cum nu am reusit sa i dau o pozitie mai okay.. 
                 Also, autocomplete shows no input.. It gets processed when pressing the add button, but the user cannot see it, I have no idea why (TOFIX) */
        options={totalUsers}
        inputValue={friendQuery}
        onInputChange={ (event, newInputValue) => {
            setFriendQuery(newInputValue);
        } }
        disablePortal   
        freeSolo
        sx={{ width: 300,
        marginTop: 60,
        }}
        renderInput={(params) => <TextField {...params} label="Add friend" />}
        /> 
        <AddIcon sx= {{ }} id="addButton" onClick={addFriendHandler}/>
        </div>
        ) : null
        }
        </div> 
    )
}

export default UserBar

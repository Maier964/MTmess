import AddIcon from '@mui/icons-material/Add';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { useState, useEffect } from 'react';

const UserBar = ({ user }) => {

    // All registered users
    const [totalUsers, setTotalUsers] = useState([{}]);

    // When addButton is 1, the field for adding a friend will show
    const [addButton, setAddButton] = useState(0);

    // The friend the user is searching for
    const [friendQuery, setFriendQuery] = useState('');

    // Toggles the friend search bar
    const wrapperHandler = () => {
        setAddButton(1);
    }

    // When adding the friend
    const addFriendHandler = () =>
    {
        // Add friendship to DB
        const request = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify( { user1:user , user2:friendQuery} )
        };

        // Send request
        fetch('http://localhost:8080/friendship/add', request)
            .then(  ); // friend will get added in the 'friends' state var from the db on the next render

        // Close the search bar
        setAddButton(0);
    }

    useEffect(() => {
        let aux = [];
        var i;
        // Simple get request
        fetch('http://localhost:8080/user/find/all') // returns a promise
           .then( function(response) { return response.json(); } ) // ALSO returns a promise ( haha )
           .then( function(rawData) {
               for( i = 0; i < rawData.length; i++ )
               {
                   aux[i] = rawData[i].name;
               }
           })

        setTotalUsers(aux)
    }, []);

    return (
        <div className={'userbar'}>
            <h2>{user}
                <PersonAddIcon id="addButton" onClick={wrapperHandler}/>
            </h2>
            {
                addButton === 1 ?
                (
                    <div id = "AddFriend">
                        <Autocomplete
                            options={totalUsers}
                            inputValue={friendQuery}
                            onInputChange={ (event, newInputValue) => {
                                setFriendQuery(newInputValue);
                                }
                            }
                            renderInput={(params) => <TextField {...params} label="Add friend" type={"text"} />}
                        />
                        <AddIcon onClick={addFriendHandler}/>
                    </div>
                ) :
                null
            }
        </div>
    )
}

export default UserBar

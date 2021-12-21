import React, { useState } from 'react'
import { Avatar, Button, Grid, Paper, TextField } from '@material-ui/core'
import  AddReaction  from '@mui/icons-material/AddReaction'
import { Typography } from '@mui/material';



const Register = () => {
    const buttonStyle = {
        margin:'55px 0'
    }

    const paperStyle={ padding: 20 , 
        height:'80vh', 
        width : 280,
        margin:"20px auto",} // vf - viewport height

    const avatarStyle = { 
        backgroundColor: '#21bfa6',
    }

    // Used for exporting to backend
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [hashed_password,setPassword]=useState('');

    const clickHandler=(e)=>{
        e.preventDefault()
        const user={name,email,hashed_password}
        console.log(user)
        fetch("http://localhost:8080/user/add",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(user),
        }).then(()=>{
            alert("Registration was successful!")})
        }

    return (
        <Grid> 
        <Paper elevation={10} style={paperStyle}>
            <Grid align='center'>
                    <Avatar style={avatarStyle}> <AddReaction/>  </Avatar>
                    <h2 fullwidth={true}> MTmess </h2> 
            </Grid>
            <TextField label='Username' placeholder='Enter username' fullwidth={true} required
            value={name} onChange={(e)=>setName(e.target.value)} /> {/* Using react hooks to save the name to the state variable */}

            <TextField label='Email' placeholder='Enter email' fullwidth={true} required
            value={email} onChange={(e)=>setEmail(e.target.value)}/>

            <TextField label=' ' placeholder='Enter birthdate' type='date' fullwidth={true}/>

            <TextField label='Password' placeholder='Enter password' type='password' fullwidth={true} required
            value={hashed_password} onChange={(e)=>setPassword(e.target.value)}/>

            <Button variant='contained' type='submit' color='primary' fullwidth={true} style={buttonStyle} onClick={clickHandler}> Register </Button>


            <Typography> 
            <Button href="/" variant='contained' type='submit' color='primary' fullwidth={true} style={buttonStyle}> Back </Button>
            </Typography>

        </Paper>
    </Grid>
    );
};

export default Register;
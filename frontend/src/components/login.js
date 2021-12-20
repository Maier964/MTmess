import React from 'react'
import { Avatar, Button, Grid, Paper, TextField } from '@material-ui/core'
import  AddReaction  from '@mui/icons-material/AddReaction'
import { Typography } from '@mui/material';
import { Link } from '@mui/material';





const Login=()=>{

    const buttonStyle = {
        margin:'55px 0'
    }
    const paperStyle={ padding: 20 , 
        height:'70vh', 
        width : 280,
        margin:"20px auto",} // vf - viewport height

    const avatarStyle = { 
        backgroundColor: '#21bfa6'
    }

    return( 
        <Grid> 
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                        <Avatar style={avatarStyle}> <AddReaction/>  </Avatar>
                        <h2> Sign In </h2> 
                </Grid>
                <TextField label='Username' placeholder='Enter username' fullWidth required/>
                <TextField label='Password' placeholder='Enter password' type='password' fullWidth required/>
                <Button variant='contained' type='submit' color='primary' fullWidth style={buttonStyle}> Sign in </Button>

                <Typography>
                    <Link href="#"> Forgot Password? </Link>
                </Typography>

                <Typography> Not a member? 
                    <Link href="#"> Register </Link>
                </Typography>
            </Paper>
        </Grid>
    );
}

export default Login;
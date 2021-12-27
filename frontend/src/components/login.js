import React, {useState} from 'react';
/*import { useHistory } from 'react-router-dom'*/
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { Avatar, Button, Grid, Paper, TextField } from '@material-ui/core';
import  AddReaction  from '@mui/icons-material/AddReaction';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Typography, AvatarGroup, Link } from '@mui/material';
import Feed from "./feed";

const Login = ({ user, setUser }) => {

    const buttonStyle = {
        margin:'55px 0'
    }
    const paperStyle={ padding: 20 ,
        height:'70vh',
        width : 280,
        margin:"20px auto",} // vf - viewport height

    const avatarStyle = {
        backgroundColor: '#21bfa6',
    }

    const gridAvatarStyle = {
        display:'inline-block',
        margin:"40px 60px"
    }

    // const routeHandle = () => {
    //     let navigate = useNavigate();
    //     navigate('/feed');
    // }

    const [ok, setOk] = useState(false);
    const [name,setName]=useState('');
    const [password,setPassword]=useState('');

    const clickHandler = async (e) => {
        e.preventDefault()
        const response = await fetch(`http://localhost:8080/user/find/log?name=${name}&password=${password}`)
        try {
            const data = await response.json()
            /*console.log(data)*/
            setOk(true);
            /*console.log("Before" + user);*/
            const set = () => {
                setUser(name)
            }
            set();
            /*console.log("After" + user);*/
            window.location = "/"
        }
        catch {
            alert("Incorrect credentials!")
        }
    }

    return(
        <Grid>
            <Paper elevation={15} style={paperStyle}>

                <Grid align='center'>
                    <Avatar style={avatarStyle}> <AddReaction/>  </Avatar>
                    <h2 fullwidth={true}> MTmess </h2>
                    <TextField label='Username' placeholder='Enter username' fullwidth={true} required
                               value={name} onChange={(e)=>setName(e.target.value)}/>
                    <TextField label='Password' placeholder='Enter password' type='password' fullwidth={true} required
                               value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    <Button variant='contained'
                            type='submit'
                            color='primary'
                            fullwidth={true}
                            style={buttonStyle} onClick={clickHandler}> Sign in </Button>
                </Grid>

                <Typography>
                    <Link href="#"> Forgot Password? </Link>
                </Typography>

                <Typography> Not a member?
                    <Link href="/register">Register </Link>
                </Typography>

                <Grid style={gridAvatarStyle}>
                    <AvatarGroup max={4}>
                        <Link href="#"> <Avatar style={avatarStyle}> <GoogleIcon/>  </Avatar> </Link>
                        <Link href="#"> <Avatar style={avatarStyle}> <FacebookIcon/>  </Avatar> </Link>
                        <Link href="#"> <Avatar style={avatarStyle}> <TwitterIcon/>  </Avatar> </Link>
                        <Link href="#"> <Avatar style={avatarStyle}> <LinkedInIcon/>  </Avatar> </Link>
                    </AvatarGroup>
                </Grid>

            </Paper>
        </Grid>
    );
}

export default Login;

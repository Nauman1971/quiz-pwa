import { Button, Card, Dialog, DialogActions, DialogContent, DialogTitle, Fade, makeStyles, Slide, Snackbar, SnackbarContent, TextareaAutosize, TextField, Typography } from "@material-ui/core"
import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
// import firebase from './firebase';
import { onMessageListener } from './firebase';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Alert, AlertTitle } from "@material-ui/lab";
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';

const useStyles = makeStyles(() => ({
    signup: {
        padding: 50,
        color: 'rgb(131,58,180)',
        background: 'linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)',
    },
    startBtn: {
        marginTop: 20,
        color: 'white',
        borderRadius: 10,
        background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,32,121,0.6530987394957983) 35%, rgba(0,212,255,1) 100%)'
    }
}));

type MessageObj = {
    username: string;
    message: string;
    token: string
}
const Message = ({token, handleNotification}:any) => {
    const { signup, startBtn } = useStyles();
    // const [token, setToken] = useState('');
    const [message, setMessage] = useState('');
    const [username, setUsername] = useState('');
    const [ messages, setMessages ] = useState<MessageObj[]>([]);
    const [ requesting, setRequesting ] = useState(false);
    const [open, setOpen] = useState(true);

    // useEffect(() => {
    //     setRequesting(true);
    //     axios.get('/getall').then((resp) => {
    //         setMessages([resp.data.data]);
    //         setRequesting(false);
    //     });
    // }, []);
    useEffect(() => {
        setOpen(true);
    }, []);


    const sendMessage = async () => {
        const msgData = {
            token,
            username,
            message
        }
        axios
            .post('http://localhost:5000/message', msgData)
            .then(response => response)
            .then((resp) => {
                console.log(resp.data.data)
              setMessages([...messages, resp.data.data]);
              toast.success('Submitted succesfully' , {
                position: toast.POSITION.TOP_LEFT
              });
            })
            .catch((err) => {
              console.log(err);
              toast.error('There was an error saving the message', {
                  position: toast.POSITION.TOP_RIGHT
              });
            });
    }

    onMessageListener()
    .then((payload: any) => {
        const { title, body } = payload.data;
        console.log(payload, 'onMessage')
        toast.info(`${title}; ${body}`);
    })
    .catch((err) => {
        toast.error(JSON.stringify(err));
    });

    const handleClose = () => {
        setOpen(false)
    }

    const action = (
        <Button color="secondary" size="small">Yes</Button>
    )
    return <Card className={signup}>

            <TextField 
            fullWidth 
            variant="outlined" 
            margin="dense" 
            // {...register('username')}
            label="User Name"
            // error={!!errors?.username}
            // helperText={errors?.username?.message}
            name="username"
            onChange={e => setUsername(e.target.value)}
            />

            <TextareaAutosize 
            aria-label="Enter push message" 
            rowsMin={3} placeholder="Message" 
            onChange={e => setMessage(e.target.value)}
            />
            <Button 
            className={startBtn}
            onClick={sendMessage}
            fullWidth>Signup Via Google
            </Button>
            <ToastContainer />
            <Snackbar
                open={open}
                onClose={handleClose}
                TransitionComponent={Slide}
                message="Would you like to eable notifications"
                key={Fade.name}
                action={
                    <Fragment>
                        <Button onClick={handleNotification}>Yes</Button>
                        <Button onClick={handleClose}>No</Button>
                    </Fragment>
                    
                }
                autoHideDuration={6000}
            />
            </Card>
    }

export default Message;
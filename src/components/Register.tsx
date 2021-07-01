import { Button, Card, makeStyles, TextField, Typography } from '@material-ui/core';
import { useState } from 'react';
// import firebase from './firebase';
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';
import md5 from 'md5';
import axios from 'axios';

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
}))

const Register = () => {
    // const [loading, setLoading] = useState(false);
    // const [serverError, setServerError] = useState('');
    // const usersRef = firebase.database().ref('users');
    // const { signup, startBtn } = useStyles();

    // const provider = new firebase.auth.GoogleAuthProvider();
    // provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

    // const schema = yup.object().shape({
    //     username: yup
    //         .string()
    //         .required("Username is a required field")
    //         .min(5).max(20)
    //         .matches(/^([^0-9]*)$/, "Username should not contain numbers")
    //     ,
    //     password: yup
    //         .string()
    //         .required("password is a required field ").min(8),
    //     email: yup
    //         .string()
    //         .required("email is a required field ")
    //         .email(),
    //         passwordConfirmation: yup
    //         .string()
    //         .required("confirm password is a required field ")
    //         .oneOf([yup.ref('password'), null], 'Passwords must match')
    // });

    // const { register, handleSubmit, formState:{errors} } = useForm({
    //     resolver: yupResolver(schema),
    //     mode: "onChange"
    // })
    // // const onClick = (data: any) => {
    // //     console.log(data);
    // //     setLoading(true)

    // //     firebase.auth()
    // //     .createUserWithEmailAndPassword(data.email, data.password)
    // //     .then(createdUser => {
    // //         console.log(createdUser)
    // //         createdUser.user?.updateProfile({
    // //             displayName: data.username,
    // //             // photoURL: `http://gravatar.com/avatar/${md5(createdUser.user.email)}?d=identicon`
    // //         })
    // //         .then(() => {
    // //             saveUser(createdUser)
    // //             .then(() => console.log('user saved'))
    // //             setLoading(false)
    // //         })
    // //     })
    // //     .catch(err => {
    // //         console.log(err)
    // //         setServerError(err.message)
    // //         setLoading(false)
    // //     });
    // // }

    // const onClick = async (data: any) => {
    //     const result = await axios.post('http://localhost:5000/message', data);
    //     console.log(result);
    // }

    // const saveUser = (createdUser: any) => {
    //     return usersRef.child(createdUser.user.uid).set({
    //         name: createdUser.user.displayName,
    //         // avatar: createdUser.user.photoURL
    //     });
    // }

    // const signinViaGoogle = () => {
    //     provider.setCustomParameters({
    //         'login_hint': 'user@example.com'
    //     });

    //     firebase.auth()
    //     .signInWithPopup(provider)
    //     .then((result) => {
    //         /** @type {firebase.auth.OAuthCredential} */
    //         var credential = result.credential;
    //         console.log(credential);
    //         // This gives you a Google Access Token. You can use it to access the Google API.
    //         // var token = credential?.accessToken;
    //         // console.log(token);

    //         // The signed-in user info.
    //         var user = result.user;
    //         console.log(user)
    //         // ...
    //     }).catch((error) => {
    //         // Handle Errors here.
    //         var errorCode = error.code;
    //         var errorMessage = error.message;
    //         // The email of the user's account used.
    //         var email = error.email;
    //         // The firebase.auth.AuthCredential type that was used.
    //         var credential = error.credential;
    //         // ...
    //     });
    // }

    return (
        // <Card className={signup}>

        //     <TextField 
        //     fullWidth 
        //     variant="outlined" 
        //     margin="dense" 
        //     {...register('username')}
        //     label="User Name"
        //     error={!!errors?.username}
        //     helperText={errors?.username?.message}
        //     name="username"
        //     />

        //     <TextField fullWidth 
        //     variant="outlined" 
        //     margin="dense" 
        //     {...register('email')}
        //     label="Email"
        //     error={!!errors?.email}
        //     helperText={errors?.email?.message}
        //     name="email"
        //     />

        //     <TextField fullWidth 
        //     {...register('password')}
        //     error={!!errors?.password}
        //     helperText={errors?.password?.message}
        //     label="Password" 
        //     name="password"
        //     margin="dense" 
        //     variant="outlined" 
        //     />

        //     <TextField fullWidth 
        //     {...register('passwordConfirmation')}
        //     error={!!errors?.passwordConfirmation}
        //     helperText={errors?.passwordConfirmation?.message}
        //     label="Password Confirmation" 
        //     name="passwordConfirmation"
        //     margin="dense" 
        //     variant="outlined" 
        //     />

        //     <Typography>
        //     {serverError ? <h3>Error: {serverError}</h3>: null}
        //     </Typography>

        //     <Button className={startBtn} 
        //     fullWidth
        //     onClick={handleSubmit(onClick)}
        //     disabled={loading}
        //     >Signup</Button>

        //     <Button 
        //     className={startBtn}
        //     onClick={signinViaGoogle}
        //     fullWidth>Signup Via Google
        //     </Button>
        //     <Typography>
        //         ALready a user? <Link to='/login'>Login</Link>
        //     </Typography>
        // </Card>
        <div></div>
    )
}

export default Register;
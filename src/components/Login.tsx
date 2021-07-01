// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import * as yup from 'yup';
// import { yupResolver } from '@hookform/resolvers/yup';
// import firebase from './firebase';
// import { Button, Card, makeStyles, TextField, Typography } from '@material-ui/core';

// import { Link } from 'react-router-dom';

// const useStyles = makeStyles(() => ({
//     signup: {
//         padding: 50,
//         color: 'rgb(131,58,180)',
//         background: 'linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)',
//     },
//     startBtn: {
//         marginTop: 20,
//         color: 'white',
//         borderRadius: 10,
//         background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,32,121,0.6530987394957983) 35%, rgba(0,212,255,1) 100%)'
//     }
// }))
// const Login = () => {

// //     const [loading, setLoading] = useState(false);
// //     const [serverError, setServerError] = useState('');

// //     const schema = yup.object().shape({
// //         password: yup
// //             .string()
// //             .required("password is a required field ").min(8),
// //         email: yup
// //             .string()
// //             .required("email is a required field ")
// //             .email(),
// //     })

// //     const { register, handleSubmit, formState:{errors} } = useForm({
// //         resolver: yupResolver(schema),
// //         mode: "onChange"
// //     })

// //     const onClick = (data: any) => {
// //         console.log(data);
// //         setLoading(true);
// //         firebase
// //         .auth()
// //         .signInWithEmailAndPassword(data.email, data.password)
// //         .then(signedInUser => {
// //             console.log(signedInUser)
// //             setLoading(false);
// //         })
// //         .catch(err => {
// //             setServerError(err);
// //             setLoading(false);
// //         })
// //     }

// //     const { signup, startBtn } = useStyles();
//     return (
// //         <Card className={signup}>
// //         <TextField fullWidth 
// //             variant="outlined" 
// //             margin="dense" 
// //             {...register('email')}
// //             label="Email"
// //             error={!!errors?.email}
// //             helperText={errors?.email?.message}
// //             name="email"
// //             />

// //             <TextField fullWidth 
// //             {...register('password')}
// //             error={!!errors?.password}
// //             helperText={errors?.password?.message}
// //             label="Password" 
// //             name="password"
// //             margin="dense" 
// //             variant="outlined" 
// //             />

// //             <Button className={startBtn} 
// //             fullWidth
// //             onClick={handleSubmit(onClick)}
// //             disabled={loading}
// //             >Login</Button>

// //             <Typography>
// //             {serverError ? <h3>Error: {serverError}</h3>: null}
// //             </Typography>

// //             <Typography>
// //             Don't have an account ? <Link to="/register">Register</Link>
// //             </Typography>

// //             </Card>
// <div></div>
//     )
// }

export const Login = "Hellow"
import { Button, Grid, makeStyles } from '@material-ui/core';
import './App.css';
import MainCard from './MainCard';
import { requestFirebaseNotificationPermission } from './firebase';
import { useEffect, useState } from 'react';
// import Register from './Register';
import Message from './Message';
import axios from 'axios';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import { Alert, AlertTitle } from "@material-ui/lab";
// axios.defaults.baseURL = 'http://localhost:5000';

const useStyles = makeStyles(() => ({
  mainContainer: {
    justifyContent: 'center',
    marginTop: 50
  }
}));


function App() {
  const [token, setToken] = useState('');

  function initNotification() {
    requestFirebaseNotificationPermission()
      .then((firebaseToken: any) => {
        Notification.requestPermission().then(() => {
          setToken(firebaseToken);
          console.log(firebaseToken);
        })
        // eslint-disable-next-line no-console
      })
      .catch((err) => {
        return err;
      });
  }
  const { mainContainer } = useStyles();
  return (
    <Grid container className={mainContainer}>
      <Grid item lg={6} md={6} sm={6} xs={12}>
        <MainCard />
      </Grid>
      {/* <Grid item lg={6} md={6} sm={6} xs={12}>
        <Message
          token={token}
          handleNotification={initNotification}
        />
      </Grid> */}

    </Grid>
  );
}

export default App;

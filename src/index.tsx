import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import "@fontsource/catamaran";
import { BrowserRouter as Router, Switch, Route, withRouter, useHistory } from 'react-router-dom';
import Register from './components/Register';
// import Login from './components/Login';
// import firebase from './components/firebase';
import { registerServiceWorker } from './serviceWorker';

// firebase.auth().useDeviceLanguage();
const Root = () => {
  return (
    <Switch>
      <Route exact path="/" component={App} />
      {/* <Route path="/login" component={Login} />
      <Route path="/register" component={Register} /> */}
    </Switch>
  )
} 
ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Root />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
// serviceWorkerRegistration.register();
registerServiceWorker();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import {Logo} from './index'

import { Link,  useParams } from "react-router-dom";

import {loadStripe} from '@stripe/stripe-js';
import { useEffect, useState } from 'react';
import firebase from 'firebase/app'
import {FirebaseAuthConsumer} from '@react-firebase/auth'

function Login() {
    let { email,  customerId } = useParams();

    const [error, changeError] = useState('')
    const [emailInput, changeEmail] = useState('')
    const [passwordInput, changePassword] = useState('')

    let resetPassword = async function() {
      firebase.auth().sendPasswordResetEmail(emailInput).then(res => {
        console.log(res)
      })
    }

    let formSubmit = async function() {
      console.log("passwordInput")
      firebase.auth().signInWithEmailAndPassword(emailInput, passwordInput)
      .then(res => {
        //http://localhost:5001/notecrate-5849b/us-central1/getCustomerIdByAccountNumber
        fetch("https://us-central1-notecrate-5849b.cloudfunctions.net/getCustomerIdByAccountNumber", {
            method: 'POST',
            mode: 'cors', // no-cors, *cors, same-origin,
            body: JSON.stringify({accountNumber: res.user.uid})
            }).then(resp => {
              return resp.text()
            }).then(customerId => {
              console.log("CREATE ACCOUNT SESSION", customerId)
              fetch("https://us-central1-notecrate-5849b.cloudfunctions.net/createCustomerPortalSession", {
              method: 'POST',
              mode: 'cors', // no-cors, *cors, same-origin,
              body: JSON.stringify({customerId: customerId})
              })
              .then(res => {
                  return res.json()
              })
              .then(json => {
                  console.log("CREATE ACCOUNT SESSION", json.message)
                  window.location = json.url
                  
              })
            })
      })
      .catch(err => {
        console.log(err)
        changeError(err.message)
      })


    }

  return (
    <FirebaseAuthConsumer>
      <div className="CreateAccount">
          <div className="CreateAccount-container">
              <h1>Login</h1>
              <span>{error}</span>
              <label>Email</label>
              <input value={emailInput} onChange={event => changeEmail(event.target.value)} name="email" type="email" placeholder="email"></input>
              <label>Password</label>
              <input value={passwordInput} onChange={event => changePassword(event.target.value)} type="password" placeholder="password"></input>
              <button onClick={e => formSubmit()}>Log In</button>
              <a onClick={e => resetPassword()}>Forgot Password</a>
              <Link>Don't have an Account? You will get an email after checkout with a link to create one!</Link>
          </div>
      </div>
    </FirebaseAuthConsumer>
  );
}

export default Login;

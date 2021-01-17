import {Logo} from './index'

import { Link,  useParams } from "react-router-dom";

import {loadStripe} from '@stripe/stripe-js';
import { useEffect, useState } from 'react';


function CreateAccount() {
    let { email,  customerId } = useParams();

    const [error, changeError] = useState('')
    const [passwordInput, changePassword] = useState('')
    const [confirmPasswordInput, changeConfirmPassword] = useState('')

    let formSubmit = async function() {
      if (passwordInput !== confirmPasswordInput) {
        changeError("Passwords Do Not Match")
        return;
      }
      
      //CREATE ACCOUNT NOW

      await fetch("https://us-central1-notecrate-5849b.cloudfunctions.net/createAccount", {
        method: 'POST',
        mode: 'cors', // no-cors, *cors, same-origin,
        body: JSON.stringify({password: passwordInput, email: email, customerId: customerId})
        })
        .then(async (body) => {
          console.log(body.status)
          if(body.status === 200) {
            return body.text()
          }
          else {
            let errorText = await body.json()
            changeError(errorText.message)
            throw new Error(errorText)
          }
        })
        .then(resp => {
            console.log("CREATE ACCOUNT SESSION", resp)
            fetch("https://us-central1-notecrate-5849b.cloudfunctions.net/createCustomerPortalSession", {
            method: 'POST',
            mode: 'cors', // no-cors, *cors, same-origin,
            body: JSON.stringify({customerId: resp})
            })
            .then(resp => {
                return resp.json()
            })
            .then(json => {
                console.log("CREATE ACCOUNT SESSION", json.message)
                window.location = json.url
                
            })
        })
        .catch(err => {
          console.log(err)
        })

    }

console.log(email)

  return (
    <div className="CreateAccount">
        <div className="CreateAccount-container">
            <h1>Create Account</h1>
            <span>{error}</span>
            <h2>{email}</h2>
            <label>Password</label>
            <input value={passwordInput} onChange={event => changePassword(event.target.value)} type="password" placeholder="password"></input>
            <label  type="password" placeholder="confirm password">Confirm Password</label>
            <input value={confirmPasswordInput} onChange={event => changeConfirmPassword(event.target.value)} type="password" placeholder="confirm password"></input>
            <button onClick={e => formSubmit()}>Create Account</button>
        </div>
    </div>
  );
}

export default CreateAccount;

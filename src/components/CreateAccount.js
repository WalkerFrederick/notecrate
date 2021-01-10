import {Logo} from './index'

import { Link,  useParams } from "react-router-dom";

import {loadStripe} from '@stripe/stripe-js';
import { useEffect, useState } from 'react';


function CreateAccount() {
    let { email,  customerId } = useParams();
console.log(email)

  return (
    <div className="CreateAccount">
        <div className="CreateAccount-container">
            <h1>Create Account</h1>
            <h2>{email}</h2>
            <label>Password</label>
            <input type="password" placeholder="password"></input>
            <label  type="password" placeholder="confirm password">Confirm Password</label>
            <input  type="password" placeholder="confirm password"></input>
            <button>Create Account</button>
        </div>
    </div>
  );
}

export default CreateAccount;

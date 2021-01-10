import {Logo} from './index'

import { Link,  useParams } from "react-router-dom";

import {loadStripe} from '@stripe/stripe-js';
import { useEffect, useState } from 'react';


function SuccessPage() {
    let { customerObj } = useParams();


  return (
    <div className="SuccessPage">
        <div className="SuccessPage-container">
            <h1>Thank You</h1>
            <p>You will receive a confirmation email with insutructions on how to create an account and manage your subscription.</p>
            <p>Contact support@notecrate.com if you need help with anything.</p>
        </div>
    </div>
  );
}

export default SuccessPage;

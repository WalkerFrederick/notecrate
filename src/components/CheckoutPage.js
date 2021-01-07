import {Logo} from './index'

import { Link,  useParams } from "react-router-dom";

import {loadStripe} from '@stripe/stripe-js';
import { useEffect, useState } from 'react';


function CheckoutPage() {
    let { priceId } = useParams();

    let [loading, setLoading] = useState(false)

    let goToCheckout = function(price) {
        console.log(price)
        setLoading(true)
            fetch("https://us-central1-notecrate-5849b.cloudfunctions.net/createCheckoutSession", {
                method: 'POST',
                mode: 'cors', // no-cors, *cors, same-origin,
                body: JSON.stringify({price: price})
                })
                .then(resp => {
                    return resp.json()
                })
                .then(json => {
                    (async function() {
                        let stripe = await loadStripe('pk_test_51I73wVL1gFsxa91i8w69kH5c3SFM6K2ZrkHgLm2kG79BHe6LAMvBMwfpTFhOxhChlaaSy1naOFZIPaDOrhBlj6E7006WjfjFll');
                        stripe
                        .redirectToCheckout({
                          sessionId: json.id
                        })
                    })()
                })
    }

  return (
    <div className="CheckoutPage">
        <div className="CheckoutPage-container">
            <h1 className="CheckoutPage-Heading">CHECKOUT</h1>
            <SubItem priceId={priceId}/>
            <Link to="/subscribe">Change Selection</Link>
            <button onClick={goToCheckout.bind(this, priceId)}>{loading ? "LOADING" : "CONTINUE TO PAYMENT"}</button>
        </div>
    </div>
  );
}

function SubItem(props) {
    console.log(props.priceId === 'price_1I73xjL1gFsxa91i0sforJBF' || props.priceId === 'price_1I77DFL1gFsxa91ihTZZ5DML')
    if (props.priceId === 'price_1I73xjL1gFsxa91i0sforJBF' ||  props.priceId === 'price_1I77DFL1gFsxa91ihTZZ5DML') {
        return (
            <div className="item">
                    <div className="item-avatar">
                        <h1>1</h1>
                        <span>Month</span>
                    </div>
                    <div className="item-content">
                        <h1>1 Month</h1>
                        <h2>$19</h2>
                        <p>This Item will automatically renew every month.</p>
                    </div>
            </div>
        )
    }
    else if (props.priceId === 'price_1I73ydL1gFsxa91iADlNIhUR' ||  props.priceId === 'price_1I77S2L1gFsxa91iR6Rkximc') {
        return (
            <div className="item">
                    <div className="item-avatar">
                        <h1>3</h1>
                        <span>Month</span>
                    </div>
                    <div className="item-content">
                        <h1>3 Months</h1>
                        <h2>$52</h2>
                        <p>This Item will automatically renew every 3 months.</p>
                    </div>
            </div>
        )
    }
    else if (props.priceId === 'price_1I73zYL1gFsxa91iVCkxp9ft' ||  props.priceId === 'price_1I77SjL1gFsxa91iSaLR9tEP') {
        return (
            <div className="item">
                    <div className="item-avatar">
                        <h1>6</h1>
                        <span>Months</span>
                    </div>
                    <div className="item-content">
                        <h1>6 Months</h1>
                        <h2>$94</h2>
                        <p>This Item will automatically renew every 6 months.</p>
                    </div>
            </div>
        )
    }
    else {
        return (
            <h1>ERROR</h1>
        )
    }
}

export default CheckoutPage;

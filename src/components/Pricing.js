import {Zoom} from 'react-awesome-reveal'
import background1 from '../background-1.jpg'
import {Link} from 'react-router-dom'
function Pricing() {
  return (
    <div style={{backgroundImage: `url(${background1})`, backgroundPosition: "center bottom",  backgroundSize:  "cover", backgroundRepeat: 'no-repeat'}} className="Pricing">
        <h1>CHOOSE YOUR PLAN</h1>
        <div className="Pricing-container">
        <Zoom duration={800} ><PricingCard priceId="price_1I73xjL1gFsxa91i0sforJBF" header={"Monthly"} price={"19"} bullets={["Free Shipping (US & CA)"]}/></Zoom>
        <Zoom duration={800} delay={300}><PricingCard priceId="price_1I73ydL1gFsxa91iADlNIhUR"  header={"3 Months"} price={"52"} bullets={["Save $5","Free Shipping (US & CA)"]}/></Zoom>
        <Zoom duration={800} delay={600}><PricingCard priceId="price_1I73zYL1gFsxa91iVCkxp9ft"  header={"6 Months"} price={"94"} bullets={["1 Month Free","Save $20","Free Shipping (US & CA)"]}/></Zoom>
        </div>
    </div>
  );
}

function PricingCard(props) {
    return (
      <div className="PricingCard">
          <header>{props.header}</header>
          <div className="content">
                <h2>${props.price}</h2>
                <ul>
                    <li>{props.bullets[0] ? `- ${props.bullets[0]}` : <span>&nbsp;</span>}</li>
                    <li>{props.bullets[1] ? `- ${props.bullets[1]}` : <span>&nbsp;</span>}</li>
                    <li>{props.bullets[2] ? `- ${props.bullets[2]}` : <span>&nbsp;</span>}</li>

                </ul>
                <Link to={`/subscribe/checkout/${props.priceId}`}><button>SUBSCRIBE FOR MYSELF</button></Link>
                <Link to={`/subscribe/checkout/${props.priceId}`}><button id="action-bttn">SUBSCRIBE AS A GIFT</button></Link>

          </div>
      </div>
    );
  }

export default Pricing;

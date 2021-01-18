import {Logo} from './index'
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <div className="Footer">
        <div className="Footer-container">
            <Logo></Logo>
            <Link>Home</Link>
            <Link>Account</Link>
            <Link>Subscribe</Link>
            <Link>Customer Services</Link>
        </div>
    </div>
  );
}

export default Footer;

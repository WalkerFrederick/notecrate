import {Logo} from './index'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div className="Navbar">
        <div className="Navbar-1">
        </div>
        <div className="Navbar-2"><Link to="/"><Logo height={"45px"}/></Link></div>
        <div className="Navbar-3">
            <Link to="/login"><button>Login</button></Link>
            <Link to="/subscribe"><button className="action-button">Get Started</button></Link>

        </div>
    </div>
  );
}

export default Navbar;

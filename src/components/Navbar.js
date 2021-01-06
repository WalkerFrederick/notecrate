import {Logo} from './index'


function Navbar() {
  return (
    <div className="Navbar">
        <div className="Navbar-1">
        </div>
        <div className="Navbar-2"><Logo height={"45px"}/></div>
        <div className="Navbar-3">
            <button>Login</button>
            <button className="action-button">Get Started</button>

        </div>
    </div>
  );
}

export default Navbar;

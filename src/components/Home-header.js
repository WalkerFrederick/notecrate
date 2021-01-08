import {Logo} from './index'
import videoSrc from '../video.mp4'
import poster from '../cratetest.jpg'

import { Link } from "react-router-dom";

function HomeHeader() {
  return (
    <div className="HomeHeader">
        <div className="button-container">
            <Link to="/subscribe"><button>SUBSCRIBE</button></Link>
            <Link to="/subscribe"><button>UPCOMING BOX</button></Link>
        </div>
        <video autoPlay={true} muted loop playsinline poster={poster}>
            <source src={videoSrc} type="video/mp4"/>
        </video>
    </div>
  );
}

export default HomeHeader;

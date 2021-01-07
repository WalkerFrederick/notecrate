import {Logo} from './index'
import videoSrc from '../video.mp4'
import poster from '../cratetest.jpg'

function HomeHeader() {
  return (
    <div className="HomeHeader">
        <div className="button-container">
            <button>SUBSCRIBE</button>
            <button>CURRENT BOX</button>
        </div>
        <video autoPlay={true} muted loop poster={poster}>
            <source src={videoSrc} type="video/mp4"/>
        </video>
    </div>
  );
}

export default HomeHeader;

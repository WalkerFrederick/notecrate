import {Logo} from './index'
import background1 from '../mountains.jpg'

function UpcomingBox() {
  return (
    <div className="UpcomingBox">
        <div style={{backgroundImage: `url(${background1})`, backgroundPosition: 'center bottom', backgroundSize: 'cover'}} className="UpcomingBox-container">
            <h1>FEBUARY'S BOX</h1>
            <h2>Winter Nights</h2>
            <a href="http://instagram.com">Art By Sierra Reis</a> 
        </div>
    </div>
  );
}

export default UpcomingBox;

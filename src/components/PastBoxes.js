import {Logo} from './index'
import background1 from '../products1.jpg'
import background2 from '../products2.jpg'

function PastBoxes() {
  return (
    <div className="PastBoxes">
                <div style={{backgroundImage: `url(${background1})`, backgroundSize: 'cover', backgroundPosition: 'center'}} className="box">
            <div className="tint">

            </div>
        </div>
        <div style={{backgroundImage: `url(${background2})`, backgroundSize: 'cover', backgroundPosition: 'center'}} className="box">
            <div className="tint">

            </div>
        </div>
        <div style={{backgroundImage: `url(${background1})`, backgroundSize: 'cover', backgroundPosition: 'center'}} className="box">
            <div className="tint">

            </div>
        </div>
        <div style={{backgroundImage: `url(${background1})`, backgroundSize: 'cover', backgroundPosition: 'center'}} className="box">
            <div className="tint">

            </div>
        </div>
    </div>
  );
}

export default PastBoxes;

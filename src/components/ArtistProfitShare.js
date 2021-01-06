import {Logo} from './index'
import heartbrush from './../heartbrush.png'
import artist from './../artist.svg'
import {Fade} from 'react-awesome-reveal'
function ArtistProfitShare() {
  return (
    <div className="ArtistProfitShare">
        <div className="ArtistProfitShare-container">
            <div className="left">
                <img src={heartbrush}></img>
                <h1>Artist Profit Share</h1>
                <span></span>
                <p>
                    NoteCrate works with all our in-house and guest Artists to achieve a competitive base pay and a industry leading Profit Share Agreement. Every Artist we work with will recieve a portion of the profits from products they work on.
                </p>
            </div>
            <div className="right" style={{backgroundImage: `url(${artist})`,  backgroundPosition: "center", backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}></div>

        </div>
    </div>
  );
}

export default ArtistProfitShare;

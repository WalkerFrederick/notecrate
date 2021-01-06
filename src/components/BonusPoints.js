import {TruckIcon, HeartIcon, ShirtIcon} from './index'; 

function BonusPoints() {
  return (
    <div className="BonusPoints">
      <div className="BonusPoints-container">
        <div className="point">
          <ShirtIcon></ShirtIcon>
          <h1>Free Shipping (US & CA)</h1>
        </div>
        <div className="point">
          <ShirtIcon></ShirtIcon>
          <h1>First Month Free T-Shirt</h1>
        </div>
        <div className="point">
          <HeartIcon></HeartIcon>
          <h1>Artist Profit Share</h1>
        </div>
      </div>
    </div>
  );
}

export default BonusPoints;

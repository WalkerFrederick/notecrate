import logo from './logo.svg';
import './styles/App.scss';

import {
  Navbar,
  HomeHeader,
  NewProductsTagLine,
  Quote,
  Pricing,
  BonusPoints,
  WhatYouGet,
  PastBoxes,
  BigReview,
  ArtistProfitShare
} from './components'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HomeHeader/>
      <NewProductsTagLine/>
      <Quote quote={"Fantastic Box. Some of the best stationary I've seen"} author={"Walker"}/>
      <Pricing/>
      <BonusPoints/>
      <WhatYouGet/>
      <PastBoxes/>
      <BigReview/>
      <ArtistProfitShare/>
    </div>
  );
}

export default App;

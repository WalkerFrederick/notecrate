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
  ArtistProfitShare,
  CheckoutPage,
  SuccessPage,
  CreateAccount
} from './components'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
  withRouter
} from "react-router-dom";
import {useEffect} from 'react'


function _ScrollToTop(props) {
  const { pathname } = useLocation();
  useEffect(() => {
      window.scrollTo(0, 0);
  }, [pathname]);
  return props.children
}
const ScrollToTop = withRouter(_ScrollToTop)

function App() {
  return (
    <div className="App">
      <Router>
      <ScrollToTop>

      <Navbar/>

          <Switch>
          <Route path={"/subscribe"}>
            <Switch>
              <Route path="/subscribe/checkout/success/">
                <SuccessPage/>
              </Route>
              <Route path="/subscribe/checkout/failure">
                <CheckoutPage/>
              </Route>
              <Route path="/subscribe/checkout/:priceId">
                <CheckoutPage/>
              </Route>
              <Route path="/subscribe/">
              <Pricing/>
              <BonusPoints/>
              <WhatYouGet/>
              <PastBoxes/>
              <BigReview/>
              <ArtistProfitShare/>
              </Route>
            </Switch>
          </Route>
          <Route path={"/account"}>
            account
          </Route>
          <Route path={"/create-account/:email/:customerId"}>
            <CreateAccount/>
          </Route>
          <Route path={"/login"}>
            login
          </Route>
          <Route path={"/login"}>
            account
          </Route>
          <Route path="/">
            <HomeHeader/>
            <NewProductsTagLine/>
            <Quote quote={"Fantastic Box. Some of the best stationary I've seen"} author={"Walker"}/>
            <Pricing/>
            <BonusPoints/>
            <WhatYouGet/>
            <PastBoxes/>
            <BigReview/>
            <ArtistProfitShare/>
          </Route>
        </Switch>
      </ScrollToTop>

      </Router>
    </div>
  );
}

export default App;

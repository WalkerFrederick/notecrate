import logo from './logo.svg';
import './styles/App.scss';

import {
  Navbar,
  Footer,
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
  CreateAccount,
  Login,
  UpcomingBox
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
import {FirebaseAuthConsumer, FirebaseAuthProvider} from '@react-firebase/auth'

import firebase from "firebase/app";
import "firebase/auth";
const config = {
  apiKey: "AIzaSyCu0OtToxRxjTH4MD6VnnVQj9jOZhugjdQ",
  authDomain: "notecrate-5849b.firebaseapp.com",
  projectId: "notecrate-5849b",
  storageBucket: "notecrate-5849b.appspot.com",
  messagingSenderId: "1086540562059",
  appId: "1:1086540562059:web:c5777872f5898376399e8e",
  measurementId: "G-MFCCV62KSX"
};

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
    <FirebaseAuthProvider firebase={firebase} {...config}>
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
              <UpcomingBox/>
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
            <Login/>
          </Route>
          <Route path={"/login"}>
            account
          </Route>
          <Route path="/">
            <HomeHeader/>
            <UpcomingBox/>
            <Pricing/>
            <BonusPoints/>
            <WhatYouGet/>
            <PastBoxes/>
            <BigReview/>
            <ArtistProfitShare/>
          </Route>
        </Switch>
      </ScrollToTop>
      <Footer></Footer>
      </Router>
    </div>
    </FirebaseAuthProvider>

  );
}

export default App;

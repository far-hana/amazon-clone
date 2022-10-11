import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Checkout from "./Checkout";
import { auth } from "./firebase";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Payment from "./Payment";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51LnVB5SCtcEEddXh0oJInKfJDnlgNzzT6dXcT2WHiHUwxKUJNkU0eIu1VlVD653N1sPSNGPagbmfMIwYCqPCfwVF00nA3jNNU1"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // its like dynamic if statement
    // will only run once when the app component loads
    auth.onAuthStateChanged((authUser) => {
      console.log(authUser);

      if (authUser) {
        // user is logged in or user was logged in
        dispatch({
          type: "Set-User",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "Set-User",
          user: null,
        });
      }
    });
  }, []);
  return (
    // BEM

    <Router>
      <div className="app">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
          <Route
            path="/checkout"
            element={
              <>
                <Header />

                <Checkout />
              </>
            }
          />
          <Route
            path="/payment"
            element={
              <>
                <Header />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

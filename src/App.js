import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { auth } from "./firebase/firebase.utils";
import Homepage from "./Pages/Homepage/Homepage";
import Shoppage from "./Pages/Shoppage/Shoppage";
import Header from "./Components/Header/Header";
import SigninAndSignup from "./Pages/SigninAndSignup/SigninAndSignup";
import "./App.css";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <Router>
        <div>
          <Header currentUser={this.state.currentUser} />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/shop" element={<Shoppage />} />
            <Route path="/signin" element={<SigninAndSignup />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import Homepage from './Components/Homepage.js';
import React, { CSSProperties } from 'react';
import ConnectWallet from './Components/Connect.js';
import { ethers } from 'ethers';
import { useState, useEffect } from 'react';


function App() {

  const [defaultAccount, setDefaultAccount] = useState(null);

  // const connect = () => {
  //   const provider = new ethers.providers.Web3Provider(window.ethereum);
  //   if (window.ethereum) {
  //     provider.send("eth_requestAccounts", []).then(async () => {
  //       await accountChangedHandler(provider.getSigner().getAddress());
  //     })
  //   }
  // }

  // const accountChangedHandler = async (newAccount) => {
  //   const address = await newAccount.getAddress();
  //   setDefaultAccount(address);
  // }

  // function walletChanged() {
  //   window.location.reload();
  //   connect();
  // }

  // useEffect(() => {
  //   window.ethereum.on('accountsChanged', walletChanged);
  // }, []);

  return (
    <div className="App">
      <header>
        <nav>
          <div className="logo">
            <h1>
              <div className="bounce">
                <span style={{ "--i": "1" }}>G</span>
                <span style={{ "--i": "2" }}>r</span>
                <span style={{ "--i": "3" }}>a</span>
                <span style={{ "--i": "4" }}>n</span>
                <span style={{ "--i": "5" }}>d</span>
                <span style={{ "--i": "6" }}>p</span>
                <span style={{ "--i": "7" }}>a</span>
                <span style={{ "--i": "8" }}>'</span>
                <span style={{ "--i": "9" }}>s</span>
                <span style={{ "--i": "10" }}>&nbsp;</span>
                <span style={{ "--i": "11" }}>G</span>
                <span style={{ "--i": "12" }}>r</span>
                <span style={{ "--i": "13" }}>a</span>
                <span style={{ "--i": "14" }}>n</span>
                <span style={{ "--i": "15" }}>t</span>
                <span style={{ "--i": "16" }}>s</span>
                <span style={{ "--i": "17" }}>&nbsp;</span>
                <span style={{ "--i": "18" }}>D</span>
                <span style={{ "--i": "19" }}>A</span>
                <span style={{ "--i": "20" }}>O</span>

              </div>
            </h1>
          </div>

          <ul>
            <li className="nav-cta"><ConnectWallet /></li>
          </ul>
        </nav>
      </header>

      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />


        </Routes>

      </Router>
    </div>
  );
}

export default App;

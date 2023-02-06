import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import Homepage from './Components/Homepage.js';
import Mint from './Components/Mint.js';
import { ethers } from 'ethers';
import { useState, useEffect } from 'react';


function App() {

  const [defaultAccount, setDefaultAccount] = useState(null);

  const connect = () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    if (window.ethereum) {
      provider.send("eth_requestAccounts", []).then(async () => {
        await accountChangedHandler(provider.getSigner().getAddress());
      })
    }
  }

  const accountChangedHandler = async (newAccount) => {
    const address = await newAccount.getAddress();
    setDefaultAccount(address);
  }

  function walletChanged() {
    window.location.reload();
    connect();
  }

  useEffect(() => {
    window.ethereum.on('accountsChanged', walletChanged);
  }, []);

  return (
    <div className="App">
      <header>
        <nav>
          <div className="logo">
            <h1><a href="#">GrandPa's Chat</a></h1>
          </div>

          <ul>
            <li><a href="./">Home</a></li>
            <li className="nav-cta"><a onClick={connect} href="">Connect</a></li>
          </ul>
        </nav>
      </header>

      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Mint" element={<Mint />} />

        </Routes>

      </Router>
    </div>
  );
}

export default App;

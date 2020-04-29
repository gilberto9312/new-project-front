import React from 'react';
import { Clients } from './component/clients';
import { Route,Link } from "wouter";
import { GetClients } from './component/clients/get_clients';
import { Wallet } from './component/wallet';
import { Token } from './component/pay';
import { Confirm } from './component/pay/confirm';
import { Amount } from './component/amount';
import {Home} from './component/home'

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link href="/">
        <a className="navbar-brand" href="#">Home</a>
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
            <Link href="/pay">
              <a className="nav-link" href="#">Pay </a>
              </Link>
            </li>
            <li className="nav-item">
            <Link href="/clients">
              <a className="nav-link" href="#">New Client</a>
              </Link>
            </li>
            <li className="nav-item">
            <Link href="/wallet">
              <a className="nav-link" href="#">Top up balance</a>
              </Link>
            </li>
            <li className="nav-item">
            <Link href="/amount">
              <a className="nav-link" href="#">Consult amount</a>
              </Link>
            </li>
            
          </ul>
        </div>
      </nav>
        <Route path="/" component={Home} />
        <Route path="/clients" component={Clients} />
        <Route path="/getclients" component={GetClients} />
        <Route path="/wallet" component={Wallet} />
        <Route path="/pay" component={Token} />
        <Route path="/confirm" component={Confirm} />
        <Route path="/amount" component={Amount} />
      </div>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AddAccount from "./components/AddAccount";
import Account from "./components/Account";
import AccountList from "./components/AccountList";
function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/accounts" className="navbar-brand">
          Account Manager
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/accounts"} className="nav-link">
              Accounts
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              Add
            </Link>
          </li>
        </div>
      </nav>
      <div className="container mt-3">
        <Routes>
          <Route exact path="/" element={<AccountList/>} />
          <Route exact path="/accounts" element={<AccountList/>} />
          <Route exact path="/add" element={<AddAccount/>} />
          <Route exact path="/accounts/:id" element={<Account/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  retrieveAccounts,
  findAccountsByName,
  deleteAllAccounts,
} from "../actions/accounts";
import { Link } from "react-router-dom";
const AccountList = () => {
  const [currentAccount, setCurrentAccount] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchName, setSearchName] = useState("");
  const accounts = useSelector(state => state.accounts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(retrieveAccounts());
  }, []);
  const onChangeSearchName = e => {
    const searchName = e.target.value;
    setSearchName(searchName);
  };
  const refreshData = () => {
    setCurrentAccount(null);
    setCurrentIndex(-1);
  };
  const setActiveAccount = (account, index) => {
    setCurrentAccount(account);
    setCurrentIndex(index);
  };
  const removeAllAccounts = () => {
    dispatch(deleteAllAccounts())
      .then(response => {
        console.log(response);
        refreshData();
      })
      .catch(e => {
        console.log(e);
      });
  };
  const findByName = () => {
    refreshData();
    dispatch(findAccountsByName(searchName));
  };
  return (
    <div className="list row">
      <div className="col-md-8">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by name"
            value={searchName}
            onChange={onChangeSearchName}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={findByName}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <h4>Accounts List</h4>
        <ul className="list-group">
          {accounts &&
            accounts.map((account, index) => (
              <li
                className={
                  "list-group-item " + (index === currentIndex ? "active" : "")
                }
                onClick={() => setActiveAccount(account, index)}
                key={index}
              >
                {account.name}
              </li>
            ))}
        </ul>
        <button
          className="m-3 btn btn-sm btn-danger"
          onClick={removeAllAccounts}
        >
          Remove All
        </button>
      </div>
      <div className="col-md-6">
        {currentAccount ? (
          <div>
            <h4>Account</h4>
            <div>
              <label>
                <strong>Account Number:</strong>
              </label>{" "}
              {currentAccount.number}
            </div>
            <div>
              <label>
                <strong>Name:</strong>
              </label>{" "}
              {currentAccount.name}
            </div>
            <div>
              <label>
                <strong>Address:</strong>
              </label>{" "}
              {currentAccount.address}
            </div>
            <div>
              <label>
                <strong>Balance:</strong>
              </label>{" "}
              {currentAccount.balance}
            </div>
            <div>
              <label>
                <strong>Opened:</strong>
              </label>{" "}
              {currentAccount.openingDate}
            </div>
            <div>
              <label>
                <strong>Status:</strong>
              </label>{" "}
              {currentAccount.active ? "Active" : "Inactive"}
            </div>
            <Link
              to={"/accounts/" + currentAccount.id}
              className="btn btn-sm btn-warning"
            >
              Edit
            </Link>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on an Account to view details...</p>
          </div>
        )}
      </div>
    </div>
  );
};
export default AccountList;
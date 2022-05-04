import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateAccount, deleteAccount } from "../actions/accounts";
import AccountDataService from "../services/AccountService";
const Account = (props) => {
  const initialAccountState = {
    id: null,
    name: "",
    number: "",
    address: "",
    balance: 0.0,
    openingDate: null,
    active: false
  };
  const [currentAccount, setCurrentAccount] = useState(initialAccountState);
  const [message, setMessage] = useState("");
  const { id } = useParams();
  const dispatch = useDispatch();
  const getAccount = id => {
    AccountDataService.get(id)
      .then(response => {
        setCurrentAccount(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };
  useEffect(() => {
    getAccount(id);
  }, [id]);
  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentAccount({ ...currentAccount, [name]: value });
  };
  const updateStatus = status => {
    const data = {
      id: currentAccount.id,
      number: currentAccount.number,
      name: currentAccount.name,
      address: currentAccount.address,
      balance: currentAccount.balance,
      openingDate: currentAccount.openingDate,
      active: status
    };
    dispatch(updateAccount(currentAccount.id, data))
      .then(response => {
        console.log(response);
        setCurrentAccount({ ...currentAccount, active: status });
        setMessage("The status was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };
  const updateContent = () => {
    dispatch(updateAccount(currentAccount.id, currentAccount))
      .then(response => {
        console.log(response);
        setMessage("The account was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };
  const removeAccount = () => {
    dispatch(deleteAccount(currentAccount.id))
      .then(() => {
        props.history.push("/accounts");
      })
      .catch(e => {
        console.log(e);
      });
  };
  return (
    <div>
      {currentAccount ? (
        <div className="edit-form">
          <h4>Account</h4>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={currentAccount.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                className="form-control"
                id="address"
                name="address"
                value={currentAccount.address}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="balance">Balance</label>
              <input
                type="text"
                className="form-control"
                id="balance"
                name="balance"
                value={currentAccount.balance}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>
                <strong>Status:</strong>
              </label>
              {currentAccount.active ? "Active" : "Inactive"}
            </div>
          </form>
          {currentAccount.active ? (
            <button
              className="btn btn-primary mr-2"
              onClick={() => updateStatus(false)}
            >
              Deactivate
            </button>
          ) : (
            <button
              className="btn btn-primary mr-2"
              onClick={() => updateStatus(true)}
            >
              Activate
            </button>
          )}
          <button className="btn btn-danger mr-2" onClick={removeAccount}>
            Delete
          </button>
          <button
            type="submit"
            className="btn btn-success"
            onClick={updateContent}
          >
            Update
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Account...</p>
        </div>
      )}
    </div>
  );
};
export default Account;
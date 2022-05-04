import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createAccount } from "../actions/accounts";
const AddAccount = () => {
  const initialAccountState = {
    id: null,
    number: "",
    name: "",
    address: "",
    balance: 0.0,
    openingDate: "",
    published: false
  };
  const [account, setAccount] = useState(initialAccountState);
  const [submitted, setSubmitted] = useState(false);
  const dispatch = useDispatch();
  const handleInputChange = event => {
    const { name, value } = event.target;
    setAccount({ ...account, [name]: value });
  };
  const saveAccount = () => {
    const { name, address, balance } = account;
    dispatch(createAccount(name, address, balance))
      .then(data => {
        setAccount({
          id: data.id,
          number: data.number,
          name: data.name,
          address: data.address,
          balance: data.balance,
          openingDate: data.openingDate,
          active: data.active
        });
        setSubmitted(true);
        console.log(data);
      })
      .catch(e => {
        console.log(e);
      });
  };
  const newAccount = () => {
    setAccount(initialAccountState);
    setSubmitted(false);
  };
  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>Account created successfully!</h4>
          <button className="btn btn-success" onClick={newAccount}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              required
              value={account.name}
              onChange={handleInputChange}
              name="name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              className="form-control"
              id="address"
              required
              value={account.address}
              onChange={handleInputChange}
              name="address"
            />
          </div>
          <div className="form-group">
            <label htmlFor="balance">Balance</label>
            <input
              type="text"
              className="form-control"
              id="balance"
              required
              value={account.balance}
              onChange={handleInputChange}
              name="balance"
            />
          </div>
          <button onClick={saveAccount} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};
export default AddAccount;
import {
    CREATE_ACCOUNT,
    RETRIEVE_ACCOUNTS,
    UPDATE_ACCOUNT,
    DELETE_ACCOUNT,
    DELETE_ALL_ACCOUNTS,
} from "./types";
import AccountDataService from "../services/AccountService";

  export const createAccount = (name, address, balance) => async (dispatch) => {
    try {
      const res = await AccountDataService.create({ name, address, balance });
      dispatch({
        type: CREATE_ACCOUNT,
        payload: res.data,
      });
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };
  export const retrieveAccounts = () => async (dispatch) => {
    try {
      const res = await AccountDataService.getAll();
      dispatch({
        type: RETRIEVE_ACCOUNTS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
  export const updateAccount = (id, data) => async (dispatch) => {
    try {
      const res = await AccountDataService.update(id, data);
      dispatch({
        type: UPDATE_ACCOUNT,
        payload: data,
      });
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };
  export const deleteAccount = (id) => async (dispatch) => {
    try {
      await AccountDataService.remove(id);
      dispatch({
        type: DELETE_ACCOUNT,
        payload: { id },
      });
    } catch (err) {
      console.log(err);
    }
  };
  export const deleteAllAccounts = () => async (dispatch) => {
    try {
      const res = await AccountDataService.removeAll();
      dispatch({
        type: DELETE_ALL_ACCOUNTS,
        payload: res.data,
      });
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };
  export const findAccountsByName = (name) => async (dispatch) => {
    try {
      const res = await AccountDataService.findByName(name);
      dispatch({
        type: RETRIEVE_ACCOUNTS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
import axios, { AxiosResponse } from "axios";
import { Dispatch } from "redux";
import { GET_USERS, GET_USER_DETAILS, GET_USER_REPO } from "../store/reducers/userReducer";

export const getUsers = (user:string) => {
  return async (dispatch:Dispatch):Promise<void> => {
    try {
      let response: AxiosResponse = await axios.get(`https://api.github.com/search/users?q=${user}`);
      response && dispatch({ type: GET_USERS, payload: response.data.items });
    } catch (e) {
      console.warn(e);
    }
  }
}

export const getUsersDetails = (name:string) => {
  return async (dispatch:Dispatch):Promise<void> => {
    try {
      let response: AxiosResponse = await axios.get(`https://api.github.com/users/${name}`);
      response && dispatch({ type: GET_USER_DETAILS, payload: response.data});
    } catch (e) {
      console.warn(e);
    }
  }
}

export const getUsersRepo = (name:string) => {
  return async (dispatch:Dispatch):Promise<void> => {
    try {
      let response: AxiosResponse = await axios.get(`https://api.github.com/users/${name}/repos`);
      response && dispatch({ type: GET_USER_REPO, payload: response.data});
    } catch (e) {
      console.warn(e);
    }
  }
}
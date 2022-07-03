import axios from "axios";
import {
    
   
    LOGOUT,
    USER_FAIL,
    USER_lOGIN,
    USER_REGISTER,
    GET_USER,
  } from "../Types";
  import { setAlert } from "./alertAction";
  export const register = (formData,navigate) => async (dispatch) => {
    try {
      const res = await axios.post(
        "http://localhost:9000/api/auth/register",
        formData
      );
      console.log(res.data);
      dispatch({
        type: USER_REGISTER,
        payload: res.data,
      });
      navigate("/home");
    } catch (err) {
      console.log(err.response.data);
      dispatch({
        type: USER_FAIL,
      });
      err.response.data.errors.forEach((error) =>
        dispatch(setAlert(error.msg, "danger"))
      );
    }
  };


  
  // login
  export const login = (formData, navigate) => async (dispatch) => {
    try {
      const res = await axios.post(
        "http://localhost:9000/api/auth/login",
        formData
      );
      console.log(res.data);
      dispatch({
        type: USER_lOGIN,
        payload: res.data,
      });
      navigate("/home");
    } catch (err) {
      console.log(err.response.data);
      dispatch({
        type: USER_FAIL,
      });
      err.response.data.errors.forEach((error) =>
        dispatch(setAlert(error.msg, "danger"))
      );
    }
  };
  
  // logout
  export const logout = () => {
    return {
      type: LOGOUT,
    };
  };

  //get auth user
export const current = () => async (dispatch) => {
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    const res = await axios.get(
      "http://localhost:9000/api/auth/current",
      config
    );
    dispatch({
      type: GET_USER,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response.data);
    dispatch({
      type: USER_FAIL,
    });
  }
};
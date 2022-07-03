import axios from "axios";
import { GETALLEVENTS, FILTEREVENT, GET_EVENT } from "../Types";
import { setAlert } from "./alertAction";

//  get all event

export const getAllEvents = () => async (dispatch) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      authorization: token,
    },
  };
  try {
    const res = await axios.get(
      "http://localhost:9000/api/event/allevents",
      config
    );
    console.log(res);
    dispatch({
      type: GETALLEVENTS,
      payload: res.data,
    });
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};

// add event

export const addEvent = (formData, navigate) => async (dispatch) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      authorization: token,
    },
  };
  try {
    const res = await axios.post(
      "http://localhost:9000/api/event/addevent",
      formData,
      config
    );

    dispatch(getAllEvents());
    dispatch({
      type: GET_EVENT,
      payload: res.data,
    });
    navigate("/eventqrcode");
  } catch (err) {
    console.log(err);
    err.response.data.errors.forEach((error) =>
      dispatch(setAlert(error.msg, "danger"))
    );
  }
};

export const filterEvent = (status) => {
  return {
    type: FILTEREVENT,
    payload: status,
  };
};

//get one  event

export const getOneEevent = (eventId) => async (dispatch) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      authorization: token,
    },
  };
  try {
    const res = await axios.get(
      `http://localhost:9000/api/event/getevent/${eventId}`,
      config
    );
    console.log(res.data);
    dispatch({
      type: GET_EVENT,
      payload: res.data,
    });
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};

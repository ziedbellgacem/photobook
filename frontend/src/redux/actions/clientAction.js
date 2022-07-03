import axios from "axios";
import { GETALLCLIENTS, FILTERCLIENT, GET_CLIENT } from "../Types";

// add client
export const addClient = (eventId, formData, navigate) => async (dispatch) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      authorization: token,
    },
  };

  try {
    const res = await axios.post(
      `http://localhost:9000/api/client/${eventId}`,
      formData,
      config
    );
    console.log(res.data);
    dispatch(getAllClients(eventId));
    dispatch({
      type: GET_CLIENT,
      payload: res.data,
    });
    navigate("/client/qrcodeclient");
    // navigate(`/event/${eventId}`);
  } catch (error) {
    console.log("err");
  }
};

// get all cLIENTS
export const getAllClients = (eventId) => async (dispatch) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      authorization: token,
    },
  };
  try {
    const res = await axios.get(
      `http://localhost:9000/api/client/${eventId}/allclients`,
      config
    );
    dispatch({ type: GETALLCLIENTS, payload: res.data });
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};

export const filterClient = (status) => {
  return {
    type: FILTERCLIENT,
    payload: status,
  };
};

//get one  client

export const getOneClient = (eventId, clientId) => async (dispatch) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      authorization: token,
    },
  };
  try {
    const res = await axios.get(
      `http://localhost:9000/api/client/${eventId}/${clientId}`,
      config
    );
    console.log(res.data);
    dispatch({
      type: GET_CLIENT,
      payload: res.data,
    });
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};

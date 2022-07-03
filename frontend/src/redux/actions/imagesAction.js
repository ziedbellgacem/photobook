import axios from "axios";

// add client
export const addImages =
  (eventId, clientId, formData, navigate) => async (dispatch) => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        authorization: token,
      },
    };

    try {
      const res = await axios.post(
        "http://localhost:9000/api/images/addimages",
        formData,
        config
      );
      console.log(res.data);
      navigate(`/event/${eventId}/client/${clientId}`);
    } catch (error) {
      console.log("err");
    }
  };

import { FILTERCLIENT, GETALLCLIENTS, GET_CLIENT } from "../Types";
const initState = {
  clients: [],
  client: null,
  filter: "",
  loading: true,
};
function clientReducer(state = initState, { type, payload }) {
  switch (type) {
    case GETALLCLIENTS:
      return {
        ...state,
        clients: payload.clients,
      };
    case FILTERCLIENT:
      return {
        ...state,
        filter: payload,
      };

    case GET_CLIENT:
      return {
        ...state,
        client: payload.client,
        loading: false,
      };
    default:
      return state;
  }
}
export default clientReducer;

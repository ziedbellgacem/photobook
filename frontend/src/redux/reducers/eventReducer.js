import { GETALLEVENTS, FILTEREVENT, GET_EVENT } from "../Types";
const initState = {
  events: [],
  event: null,
  loading: true,
  filter: "",
};

function eventReducer(state = initState, { type, payload }) {
  switch (type) {
    case GETALLEVENTS:
      return {
        ...state,
        events: payload.events,
        loading: false,
      };
    case FILTEREVENT:
      return {
        ...state,
        filter: payload,
      };

    case GET_EVENT:
      return {
        ...state,
        event: payload.event,
        loading: false,
      };
    default:
      return state;
  }
}

export default eventReducer;

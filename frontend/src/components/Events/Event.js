import React from "react";
import { useDispatch } from "react-redux";
import "./Event.css";
import { getOneEevent } from "../../redux/actions/eventActio";
import { useNavigate } from "react-router-dom";
import { getAllClients } from "../../redux/actions/clientAction";
function Event({ event }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <tbody
      className="tb"
      onClick={() => {
        dispatch(getOneEevent(event._id));
        dispatch(getAllClients(event._id));
        navigate(`/event/${event._id}`);
      }}
    >
      <tr>
        <th scope="row">{event.name}</th>
        <td>{event.date}</td>
        <td>{event.numberClient}</td>
        <td>{event.revenuPrevu}</td>

        <td>{event.revenu}</td>
        <td>{event.statut}</td>
      </tr>
    </tbody>
  );
}

export default Event;

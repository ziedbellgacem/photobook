import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getOneClient } from "../../redux/actions/clientAction";
import "./client.css";
function Client({ client }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const event = useSelector((state) => state.eventReducer.event);

  return (
    <tbody
      className="tb"
      onClick={() => {
        dispatch(getOneClient(event._id, client._id));
        navigate(`/event/${event._id}/client/${client._id}`);
      }}
    >
      <tr>
        <th scope="row">{client.firstname}</th>
        <td>{client.lastname}</td>
        <td>{client.email}</td>
        <td>{client.numberPhoto}</td>

        <td>{client.revenuPrevu}</td>
        <td>{client.revenu}</td>
      </tr>
    </tbody>
  );
}

export default Client;

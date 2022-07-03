import React from "react";
import "./Events.css";
import Button from "@mui/material/Button";
import Event from "./Event";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Events() {
  const navigate = useNavigate();
  const events = useSelector((state) => state.eventReducer.events);
  const filter = useSelector((state) => state.eventReducer.filter);
  return (
    <div className="events">
      <div className="eventsBtn">
        <Button variant="contained" onClick={() => navigate("/addEvent")}>
          Add Event
        </Button>
        <Button variant="contained">Add Images</Button>
      </div>
      <div>
        <table className="table1">
          <thead className="thead1">
            <tr>
              <th scope="col">Nom de l'évenement</th>
              <th scope="col">Date</th>
              <th scope="col"> Nombre de Client</th>
              <th scope="col">Revenu Prévu</th>
              <th scope="col">Revenu</th>
              <th scope="col">Statut</th>
            </tr>
          </thead>
          {events
            .filter((event) =>
              event.name.toLowerCase().includes(filter.toLowerCase().trim())
            )
            .map((event) => (
              <Event event={event} key={event._id} />
            ))}
        </table>
      </div>
    </div>
  );
}

export default Events;

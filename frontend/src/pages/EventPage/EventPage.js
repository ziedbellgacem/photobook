import React, { useEffect, useState } from "react";
import "./EventPage.css";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import Client from "./Client";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { filterClient, getAllClients } from "../../redux/actions/clientAction";
import { getOneEevent } from "../../redux/actions/eventActio";
function EventPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchClient, setSearchClient] = useState("");

  const event = useSelector((state) => state.eventReducer.event);
  const clients = useSelector((state) => state.clientReducer.clients);
  const filter = useSelector((state) => state.clientReducer.filter);

  return (
    <div className="eventPage">
      <div className="eventCont">
        <h3>{event && event.name}</h3>
        <Button variant="contained">Complete l'évenement</Button>
      </div>
      <div className="ajoutClient">
        <Button
          variant="contained"
          onClick={() => {
            navigate(`/event/${event._id}/addclient`);
          }}
        >
          Ajouter Client
        </Button>
      </div>
      <div className="listClient">
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="standard-basic"
            label="Search Client"
            variant="standard"
            onChange={(e) => setSearchClient(e.target.value)}
          />
          <Button
            variant="contained"
            onClick={() => dispatch(filterClient(searchClient))}
          >
            <SearchIcon />
          </Button>
        </Box>
        <table className="table1">
          <thead className="thead1">
            <tr>
              <th scope="col">Nom </th>
              <th scope="col">Prénom</th>
              <th scope="col"> Email</th>
              <th scope="col">Nombre de Photo</th>
              <th scope="col">Revenu Prévu</th>
              <th scope="col">Revenu</th>
            </tr>
          </thead>
          {clients
            .filter((client) =>
              client.firstname
                .toLowerCase()
                .includes(filter.toLowerCase().trim())
            )
            .map((client) => (
              <Client client={client} key={client._id} />
            ))}
        </table>
      </div>
    </div>
  );
}

export default EventPage;

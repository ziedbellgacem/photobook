import React, { useState } from "react";
import "./AddClient.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addClient, getAllClients } from "../../redux/actions/clientAction";

function AddClient() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const event = useSelector((state) => state.eventReducer.event);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });

  //handelChange
  const handelChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div className="addClient">
      <div className="addclentform">
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
        >
          <div className="clientForm">
            <TextField
              id="standard-basic"
              label="Nom*"
              variant="standard"
              name="firstname"
              onChange={handelChange}
            />
            <br />
            <br />
            <br />

            <TextField
              id="standard-basic"
              label="Prénom*"
              variant="standard"
              name="lastname"
              onChange={handelChange}
            />
            <br />
            <br />
            <br />
            <TextField
              id="standard-basic"
              label="Email*"
              variant="standard"
              type="email"
              name="email"
              onChange={handelChange}
            />
          </div>
          <Button
            variant="contained"
            onClick={() => {
              dispatch(addClient(event._id, formData, navigate));
            }}
          >
            Ajouter Client
          </Button>
        </Box>
      </div>
    </div>
  );
}

export default AddClient;

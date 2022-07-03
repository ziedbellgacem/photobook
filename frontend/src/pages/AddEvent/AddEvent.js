import React, { useState } from "react";
import "./AddEvent.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addEvent } from "../../redux/actions/eventActio";
import Alerts from "../../components/alert/Alert";
function AddEvent() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    location: "",
    note: "",
  });
  //handelChange
  const handelChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="addevent">
      <div className="addform">
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
        >
          <div className="addeventform">
            <TextField
              id="outlined-password-input"
              label="Nom D'évenement"
              type="text"
              name="name"
              onChange={handelChange}
            />
            <TextField
              id="standard-basic"
              variant="standard"
              type="date"
              name="date"
              onChange={handelChange}
            />
            <TextField
              id="outlined-password-input"
              label="Location"
              type="text"
              name="location"
              onChange={handelChange}
            />
            <TextField
              id="outlined-multiline-static"
              label="Note"
              multiline
              rows={4}
              name="note"
              onChange={handelChange}
            />
            <Alerts />
            <Button
              variant="contained"
              onClick={() => {
                dispatch(addEvent(formData, navigate));
              }}
            >
              Add Event
            </Button>
          </div>
        </Box>
      </div>
    </div>
  );
}

export default AddEvent;

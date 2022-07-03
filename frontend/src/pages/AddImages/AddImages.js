import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addImages } from "../../redux/actions/imagesAction";
function AddImages() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const event = useSelector((state) => state.eventReducer.event);
  const client = useSelector((state) => state.clientReducer.client);

  const [files, setFiles] = useState([]);
  //   const [formData, setFormData] = useState({
  //     note: "",
  //   });
  //   const handelChange = (e) => {
  //     setFormData({ ...formData, [e.target.name]: e.target.value });
  //   };
  const handelAdd = (e) => {
    e.preventDefault();
    let data = new FormData();
    for (let i = 0; i < files.length; i++) {
      data.append("images", files[i]);
    }
    data.append("images", files);

    dispatch(addImages(event._id, client._id, data, navigate));
  };

  return (
    <div className="addevent">
      <div className="addform">
        <form className="addeventform">
          <input
            type="file"
            multiple
            onChange={(e) => setFiles(e.target.files)}
          />

          {/* <TextField
            label="Note"
            multiline
            rows={4}
            name="note"
            onChange={handelChange}
          /> */}
          {/* <Alerts /> */}
          <Button variant="contained" onClick={handelAdd}>
            Add Images
          </Button>
        </form>
      </div>
    </div>
  );
}

export default AddImages;

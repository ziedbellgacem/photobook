import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./QrcodeEvent.css";
import QRCode from "qrcode";

function QrcodeEvent() {
  const [imgUrl, setImgUrl] = useState("");
  const event = useSelector((state) => state.eventReducer.event);
  const generateQR = async (text) => {
    try {
      const res = await QRCode.toDataURL(text);
      setImgUrl(res);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="qrcevent">
      <div className="qrcimg">
        <h3 onClick={generateQR(event._id)}> {event.name} QRC EVENT </h3>
        <a href={imgUrl} download>
          {" "}
          <img src={imgUrl} alt="" width="200" height="200" />
        </a>
      </div>
    </div>
  );
}

export default QrcodeEvent;

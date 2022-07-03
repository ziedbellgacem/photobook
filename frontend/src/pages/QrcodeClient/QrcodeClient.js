import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./QrcodeClient.css";
import QRCode from "qrcode";

function QrcodeEvent() {
  const [imgUrl, setImgUrl] = useState("");
  const client = useSelector((state) => state.clientReducer.client);
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
        <h3 onClick={generateQR(client._id)}>
          {" "}
          {client.firstname}
          {client.lastname} QRC CLIENT{" "}
        </h3>
        <a href={imgUrl} download>
          {" "}
          <img src={imgUrl} alt="" width="200" height="200" />
        </a>
      </div>
    </div>
  );
}

export default QrcodeEvent;

import * as React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { useSelector } from "react-redux";

export default function Alerts() {
  const alerts = useSelector((state) => state.alertReducer);
  return (
    <div>
      {alerts.map((alert) => (
        <Stack spacing={2}>
          <Alert severity="error">{alert.msg}</Alert>
        </Stack>
      ))}
    </div>
  );
}
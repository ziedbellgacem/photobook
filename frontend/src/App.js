import "./App.css";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Landing from "./pages/Landing/Landing";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import PrivateRoute from "./route/PrivateRoute";
import { useDispatch } from "react-redux";
import { current } from "./redux/actions/authAction";
import AddEvent from "./pages/AddEvent/AddEvent";
import { getAllEvents } from "./redux/actions/eventActio";
import QrcodeEvent from "./pages/QrcodeEvent/QrcodeEvent";
import EventPage from "./pages/EventPage/EventPage";
import AddClient from "./pages/AddClient/AddClient";
import QrcodeClient from "./pages/QrcodeClient/QrcodeClient";
import ClientDet from "./pages/Client/ClientDet";
import AddImages from "./pages/AddImages/AddImages";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(current());
      dispatch(getAllEvents());
    }
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />

          <Route
            path="/addEvent"
            element={
              <PrivateRoute>
                <AddEvent />
              </PrivateRoute>
            }
          />
          <Route
            path="/eventqrcode"
            element={
              <PrivateRoute>
                <QrcodeEvent />
              </PrivateRoute>
            }
          />
          <Route
            path="/event/:eventId"
            element={
              <PrivateRoute>
                <EventPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/event/:eventId/addclient"
            element={
              <PrivateRoute>
                <AddClient />
              </PrivateRoute>
            }
          />
          <Route
            path="/client/qrcodeclient"
            element={
              <PrivateRoute>
                <QrcodeClient />
              </PrivateRoute>
            }
          />
          <Route
            path="/event/:eventId/client/:clientId"
            element={
              <PrivateRoute>
                <ClientDet />
              </PrivateRoute>
            }
          />
          <Route
            path="/event/:eventId/client/:clientId/addimages"
            element={
              <PrivateRoute>
                <AddImages />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

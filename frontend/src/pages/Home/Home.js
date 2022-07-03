import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Events from "../../components/Events/Events";
import Search from "../../components/search/Search";
import { getAllEvents } from "../../redux/actions/eventActio";
import "./Home.css";
function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllEvents());
  }, []);
  return (
    <div className="homeEvent">
      <Search />
      <Events />
    </div>
  );
}

export default Home;

import React from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";

//Render component
function Home() {
  return (
    <div id="home">
      <Banner />
      <Link to="/auth/login"> Go to Login</Link>
      <Link to="user/info">Go to user page</Link>
    </div>
  );
}

export default Home;

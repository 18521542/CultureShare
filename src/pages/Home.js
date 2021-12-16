import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../components/Banner';
import Homepage from '../components/Homepage';

//Render component
function Home() {
  return (
    <div id="home">
      {/* <Banner />
      <Link to="/auth/login"> Go to Login</Link>
      <Link to="user/info">Go to user page</Link> */}
      <Homepage />
    </div>
  );
}

export default Home;

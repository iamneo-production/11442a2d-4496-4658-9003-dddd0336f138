import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import Navbar from "../components/Navbar";
// import { ArrowRightCircle } from 'react-bootstrap-icons';
import { useSelector } from "react-redux";
function Home() {
  const name = useSelector((state) => state.name);
  return (
    <div>
    <div className="home-nav">
        <Navbar/>
      </div>
      <div className="home-box">
      <div className="abt">
        <h1>We send you good volunteers to help with your good cause from our network{name}</h1>
        <h2> Ready to get started on your volunteer journey?</h2>
      </div>
      <div className="grid-container">
        {/* <Link to="/Events">
          <button onClick={() => console.log('connect')}>Events<ArrowRightCircle size={25} /></button> */}
         {/* </Link> */}
         <div className="grid-con-item">
          <div className="evn-top">
            <h1>Up Coming Events</h1>
              </div>
              <div className="evn-btm">
                <h2>Volunteer Needed</h2>
          </div>
         <div className="grid-container">
        <Link to="/GBabt"><div className="grid-item">Global Volunteer</div></Link>
        <Link to="/VOabt"><div className="grid-item">virtual Opportunity</div></Link>
        <Link to='/CVabt'><div className="grid-item">Community Volunteering</div></Link>
        <Link to='/SVabt'><div className="grid-item">Student Volunteering</div></Link>
         {/* <div className="grid-item"></div>
         <div className="grid-item">Event6</div>
         <div className="grid-item">Event7</div>
         <div className="grid-item">Event8</div> */}
         </div>
         </div>
      </div>
      </div>
      </div>
  );
}

export default Home;
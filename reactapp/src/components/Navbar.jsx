import React, { useState } from "react";
// import Logo from "../assets/pizzaLogo.png";
import { Link } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <nav>
    <div className="navbar">
      {/* <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} />
        <link href='https://unpkg.com/css.gg@2.0.0/icons/css/menu.css' rel='stylesheet'></link>
        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/FindOpportunities">Find Opportunities</Link>
          <Link to="/RecruitVolunteers">Recruit Volunteers</Link>
        </div>
      </div> */}
      <div className="nav-items">
        <div className="nav-list">
        <Link to="/Home"> Home </Link>
        <Link to="/FindOpportunities">Find Opportunities</Link>
        <Link to="/VolReg">Volunteer Registration </Link>
        <Link to="/Login"> LogOut </Link>
        </div>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
    </nav>
  );
}

export default Navbar;
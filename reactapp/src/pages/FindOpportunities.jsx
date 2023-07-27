import React from 'react'
import Navbar from "../components/Navbar";
import '../styles/FindOpportunities.css'
import { Link } from 'react-router-dom';
function FindOpportunities() {
    
    return (
      <div className='main-find'>
        <div className='Nav-con'>
          <Navbar/>
        </div>
        <div className='find-page-cont'>
        <div className='abt-find'>
          <h1>we believe that everyone can make a difference in their own unique way. This is why we have a variety of volunteering programs for you to choose from.</h1>
        </div>
        <div className='find-program'>
          <div className='programs'>
            <Link to="/Glvop">Global Volunteer Program</Link>
            <div className='org-dtl'>
            <h2>Organization<Link to="/idealist">idealist.org</Link></h2>
            </div>
          </div>
          <div className='programs'>
          <Link to="/Viop">Virtual Opportunity</Link>
            <h2>Organization<Link to="/idealist">viop.org</Link></h2>
          </div>
          <div className='programs'> 
          <Link to="/Vocom">Community Volunteering</Link>
            <h2>Organization<Link to="/idealist">vocom.org</Link></h2>
            </div>
          <div className='programs'>
             <Link to="/stdvo">Student Volunteering</Link>
            <h2>Organization<Link to="/idealist">stdvo.org</Link></h2>
            </div>
          {/* <div className='programs'> 
          <Link to="/Glvop">Global Volunteer Program</Link>
            <h2>Organization<Link to="/idealist">idealist.org</Link></h2>
            </div> */}
          {/* <div className='programs'> <Link to="/Glvop">Global Volunteer Program</Link> */}
            {/* <h2>Organization<Link to="/idealist">idealist.org</Link></h2></div> */}
        </div>
        </div>
        </div>
    );
  }
export default FindOpportunities

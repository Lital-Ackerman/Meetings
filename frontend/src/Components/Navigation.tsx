import React from 'react';
import {NavLink} from 'react-router-dom';

//Navigation Links
function NavigationLinks() {

  return (
    <nav>
        <NavLink to="/home">Home</NavLink>&nbsp; | &nbsp;
        <NavLink to="/display">Display Meetings</NavLink>&nbsp; | &nbsp;
        <NavLink to="/insert">Add Meeting</NavLink>
    </nav>
  )
}

export default NavigationLinks;
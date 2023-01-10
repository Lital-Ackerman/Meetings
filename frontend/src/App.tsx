import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter } from 'react-router-dom';
import axios from "axios";
import Group from "./Model/group";
import NavigationLinks from "./Components/Navigation";
import Routing from "./Components/Routing";

function App() {
  let [groupsList, setGroupsList] = useState<Group[]>([]);

   //API request- get all groups
  useEffect(()=>{
    console.log("Starting...")

    let getgroups= async()=>{
      try{
        const response= await axios.get<Group[]>("http://localhost:4500/groups");
        setGroupsList(response.data)
        console.log(response.data)
      }
      catch(err){
        alert("No Data!")
      }
    }
    getgroups();
  }, [])

  return (
    <div className="App">
      <h1>Team Calendar</h1>
      <BrowserRouter>
        <NavigationLinks  />
        <Routing groupsList={groupsList} />
      </BrowserRouter>
    </div>
  );
}

export default App;

import { Route } from 'react-router';
import { Routes } from 'react-router';
import { Navigate } from 'react-router-dom';
import ShowMeetings from "../Components/MeetingsDisplay/ShowMeetings";
import AddMeeting from "../Components/AddMeeting/AddMeeting";

//Routing between components
function Routing(props:any) {
    return (
      <div>
  <Routes>
      <Route path='/home' element={<h2>Welcome!</h2>}/>
      <Route path='/display' element={<ShowMeetings groupsList={props.groupsList}/>}/>
      <Route path='/insert' element={<AddMeeting groupsList={props.groupsList}/>}/>
      <Route path='*' element={<Navigate to="/home"/>}/>
  </Routes>
  </div>
    )
  }
  
  export default Routing;


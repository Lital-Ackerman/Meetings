import axios from 'axios';
import React, { SyntheticEvent, useState } from 'react';
import Meeting from '../../Model/meeting';
import SingleMeeting from '../SingleMeeting/SingleMeeting';
import Group from '../../Model/group';
import "./ShowMeetings.css";


//Select group from dropdown list, get and display meetings accordingly
function ShowMeetings(props:any): JSX.Element {
  let [selectedGroup, setSelectedGroup] = useState({GId:0, GName:""});
  let [meetingsByGroup, setMeetingsByGroup] = useState<Meeting[]>([]);

  
//Get meetings according to user selection
const getMeetings= async(event:SyntheticEvent)=>{
    try{
      let selectedGId= +((event.target as HTMLSelectElement).value);
      let selectedGName= (event.target as HTMLSelectElement).selectedOptions[0].text;
      setSelectedGroup({GId: selectedGId, GName: selectedGName });
      const response= await axios.get<Meeting[]>(`http://localhost:4500/groups/${selectedGId}/meetings`);
      console.log(response.data)
      setMeetingsByGroup(response.data)
    }
    catch(err){
      console.log("Error: Can't get meetings")
      // alert("error on getting meeting")
      setMeetingsByGroup([]);
    }
  }

  return (
    <div className='showDiv'>
      <div className='selectDiv'>
      <label>Choose Team:  </label><br/>
      <select className='form-select' title='groupsSelect' placeholder='Choose Group' onChange={getMeetings}>
      <option value="0">Select Team</option>
        {props.groupsList.map((g:Group)=>
        <option key={g.GroupID} value={g.GroupID}>{g.GroupName}</option>
        )}
      </select>
      {selectedGroup.GId!=0 && <h2>{selectedGroup.GName} Appointments</h2>}
      <div className='meetingsDiv'>
          {selectedGroup.GId!=0 && meetingsByGroup.length==0 && <p>No Appointments</p>}
          {selectedGroup.GId!=0 && meetingsByGroup.length>0 &&
          meetingsByGroup.map((m:Meeting)=><SingleMeeting key={m.MeetingID} meetingInfo={m}/>)}
      </div>
      </div>
    </div>
  )
}

export default ShowMeetings;
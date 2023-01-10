import React from 'react';
import "./SingleMeeting.css";

interface mDetails{
    meetingInfo: {
    MeetingID: number,
    GroupID:number, 
    StartDate:string,
    EndDate: string, 
    Description:string, 
    Room:string,
    RunTime: number
    }
    }

//Display meetings details in cards
function SingleMeeting(props:mDetails):JSX.Element {
  
  //Calculating meeting duration
  const timeDuration=(n:number)=> {
    var num = n;
    var hours = (num / 60);
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    if (rhours==0) {return rminutes + " minute(s)"};
    if (rminutes==0) {return rhours + " hour(s)"}
    else {return rhours + " hour(s) and " + rminutes + " minutes."};
  }

  //Convert Date&Time to fixed format          
  const dateTimeConvert=(dateTime: string)=>{
    let dt= new Date(dateTime).toLocaleString('en-GB').substring(0, 17);
    return dt
  }

  return (
    <div className='singleMeetingDiv'>
       <p>Meeting ID: {props.meetingInfo.MeetingID}</p> 
       <p>From: {dateTimeConvert(props.meetingInfo.StartDate)} </p> 
       <p>To: {dateTimeConvert(props.meetingInfo.EndDate)}</p> 
       <p>Duration: {timeDuration(props.meetingInfo.RunTime)}</p> 
       <p>Description: {props.meetingInfo.Description}</p> 
       <p>Room: {props.meetingInfo.Room}</p> 
    </div>
  )
}

export default SingleMeeting;
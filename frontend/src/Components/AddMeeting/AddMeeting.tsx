import axios, { AxiosError } from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import "./AddMeeting.css";

interface Meeting{
  GroupID:number, 
  StartDate:string, 
  EndDate: string, 
  Description:string, 
  Room:string
  }

  
  //Add new meeting
function AddMeeting(props:any):JSX.Element {
  const{register, handleSubmit, formState:{errors}}=useForm();
  
  const postMeeting=async(meetingData:any)=>{
    try{
      const myMeeting: Meeting= meetingData;
      console.log(myMeeting);
      const response= await axios.post<Meeting>("http://localhost:4500/groups/insertMeeting", myMeeting);
      const result= response.data as any;
      alert(`Meeting has been added (Meeting ID: ${result.insertId})`)
    }
    catch(err:any){
      let message= JSON.stringify(err.response.data, null, " ");
      // console.log(err)
      // console.log(err.response.data)
      console.log("can't post your meeting")
      alert(`Server Error: ${message}`)
    }
}

  return (
    <div className='addDiv'>
      <form onSubmit={handleSubmit(postMeeting)}>
        <h1>Add Meeting</h1>
        <select className='form-select' title='groupsSelect' placeholder='Choose Group' {...register("GroupID", {required: true})}>
        <option value="">Select Team</option>
        {props.groupsList.map(g=>
        <option key={g.GroupID} value={g.GroupID}>{g.GroupName}</option>
        )}
        </select>
        {errors.GroupID && <p>Group is required</p>}<br/>

        <label>From:</label><br/>    
        <input className='form-control' title='dateTime' type="datetime-local" {...register("StartDate", {required:true})}/>
        {errors.StartDate && <p>Start Date&Time is required</p>}<br/>
        
        <label>To:</label><br/>
        <input className='form-control' title='dateTime' type="datetime-local" {...register("EndDate", {required:true})}/>
        {errors.EndDate && <p>End Date&Time is required</p>}<br/>

        <label>Description:</label><br/>
        <textarea className='form-control' title="desInput" {...register("Description", {required:true})}></textarea>
        {errors.Description && <p>Description is required</p>}<br/>

        <label>Room:</label><br/>
        <input className='form-control' title="roomInput" type="text" {...register("Room", {required:true})}/>
        {errors.Room && <p>Room is required</p>}<br/>

        <button className="btn btn-primary" type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default AddMeeting;
const express= require("express");
const router= express.Router();
const bll= require("../bll/bll");
const Meeting= require("../model/meeting-model")

//Route 1- Get all groups
router.get("/", async(req, res)=>{
    try{
        const groupsList= await bll.getAllGroupsAsync();
        res.send(groupsList);
    }
    catch(err){
        res.status(500).send({message: "Server Error: Cannot get Groups!"})
    }
})

//Route 2- Get meetings by group
router.get("/:id/meetings", async(req, res)=>{
    try{
        const groupId= req.params.id;
        const meetingsByGroup= await bll.getMeetingsByGroupAsync(groupId);
        if(meetingsByGroup && meetingsByGroup.length>0)
            res.send(meetingsByGroup)
        else
            res.status(404).send(`No meetings for Group ${groupId}`)
    }
    catch(err){
        res.status(500).send({message: "Server Error: Cannot get Meetings!"})
    }
})

//Route 3- Post new meeting
router.post("/insertMeeting", async(req, res)=>{
    try{
        console.log("try")
        const newMeeting= new Meeting(req.body) ;

        //Bounus Validation:
        const isOverlapping= await bll.isDoubleMeeting(newMeeting);
        if( isOverlapping && isOverlapping.length>0) throw ("Meeting is Overlapping");
        
        const result= await bll.postMeetingAsync(newMeeting);
        res.send(result);
    }
    catch(err){
        res.status(500).send(/* {message: "Server Error: Cannot post Meeting!"} */ err);
    }
})


module.exports= router;
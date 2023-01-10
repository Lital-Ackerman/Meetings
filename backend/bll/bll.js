const dal= require("../dal/dal");

//Get all groups for select input
function getAllGroupsAsync(){
    return dal.executeQueryAsync(`
        SELECT * 
        FROM groups
    `)
}

//Get meetings by group
function getMeetingsByGroupAsync(groupId){
    return dal.executeQueryAsync(`
        SELECT *, TIMESTAMPDIFF(MINUTE, StartDate, EndDate) AS RunTime 
        FROM meetings
        WHERE GroupID=${groupId}
    `);
}

//Validate if new meeting is overlapping
function isDoubleMeeting(newMeeting){
    return dal.executeQueryAsync(`
    SELECT * 
    FROM meetings
    WHERE 
    GroupID=${newMeeting.GroupID}
    AND 
    !(EndDate < '${newMeeting.StartDate}'
    OR StartDate > '${newMeeting.EndDate}')
    `)  
}

function postMeetingAsync(newMeeting){
    let errors= newMeeting.validate();
    if (errors) throw errors;
    return dal.executeQueryAsync(`
        iNSERT INTO meetings
        (GroupID, StartDate, EndDate, Description, Room) 
        VALUES (${newMeeting.GroupID}, "${newMeeting.StartDate}", "${newMeeting.EndDate}", "${newMeeting.Description}", "${newMeeting.Room}")
    `);
}

    
module.exports={
    getAllGroupsAsync,
    getMeetingsByGroupAsync,
    postMeetingAsync,
    isDoubleMeeting
}
const bll= require("../bll/bll");

class Meeting{
    constructor(GroupID, StartDate, EndDate, Description, Room){

        if(arguments.length>1){
            this.GroupID= GroupID;
            this.StartDate= StartDate;
            this.endDate= endDate;
            this.EndDate= EndDate;
            this.Description= Description;
            this.Room= Room;
        }
        else{
            let meeting= arguments[0];
            this.GroupID= meeting.GroupID;
            this.StartDate= meeting.StartDate;
            this.EndDate= meeting.EndDate;
            this.Description= meeting.Description;
            this.Room= meeting.Room;
        }

        }

        validate(){
            console.log("Starting Validaion...");
            const errors={};
            let today=new Date();
            if(this.GroupID && this.GroupID<=0)
            errors.GroupID= "Invalid Group ID!";
            console.log(this.GroupID);
            if(this.StartDate && new Date(this.StartDate)<today)
            errors.StartDate= "Invalid Date- Please Insert a future Date!";
            // console.log(new Date(this.StartDate)<today);
            // console.log(today);
            // console.log(this.StartDate);
            if(this.EndDate && new Date(this.EndDate)< new Date(this.StartDate))
            errors.EndDate= `End Date should be after ${new Date(this.StartDate).toLocaleString('en-US')}!`;
            // console.log(new Date(this.EndDate))
            // console.log(new Date(this.StartDate))
            // console.log("koko")
            if(this.Description && this.Description.length<3)
            errors.Description= "Description Should be >3";
            if(this.Room && this.Room.length<3)
            errors.Room= "Room Should be >3!";

            // //Bounus Validation:
            // console.log(bll.isDoubleMeeting(3));

            // console.log("bonus")
            // console.log(bll.isDoubleMeeting(3));
            // if(!(bll.isDoubleMeeting(this.StartDate, this.EndDate)))
            // errors.DoubleMeeting= "You already have a meeting at this time. Please select again!"
            
            const errorsLength= Object.keys(errors).length
            if(errorsLength<=0) return null
            else return errors;
        }

}

module.exports=Meeting; 

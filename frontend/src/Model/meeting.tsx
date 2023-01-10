class Meeting{
    constructor(
    public MeetingID: number,
    public GroupID:number, 
    public StartDate:string, 
    public EndDate: string, 
    public Description:string, 
    public Room:string,
    public RunTime: number) {}

}

export default Meeting
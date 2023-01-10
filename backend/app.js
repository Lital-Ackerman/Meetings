const express= require("express");
const cors= require("cors");
const config= require("./config");
const groupsController= require("./controllers/groups-controller");

const server= express();
server.use(cors());
server.use(express.json());

//Controller
server.use("/groups", groupsController);
server.use("*", (req, res)=>{
    res.status(400).send(`Rout not found ${req.originalUrl}`)
})

let port=config.port;
server.listen(port, ()=>{
    console.log(`Listening on ${port}`)
}).on("error", (err) => {
    console.log(err);
    if (err.code === "EADDRINUSE")
        console.log("Error: Address in use");
    else 
        console.log("Error: Unknown error");
})
const express = require('express');

const {PORT} = require('./config/ServerConfig.js')

const sertupAndStartServer = async () =>{
    //create a express object 
    const app = express();
    app.listen(PORT,() =>{
        console.log("Server is running on port 3000")
    })
}

sertupAndStartServer()
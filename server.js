const express =require('express');
const serverConfig = require('./config/ecommerse_project_server.config');


const app = express();
app.listen(serverConfig.PORT, () => {
    console.log('Application started on the port no: ${serverConfig.PORT}');
    
})


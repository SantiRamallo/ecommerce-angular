const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

//environment variable
if(process.env.NODE_ENV !== "production"){
    require('dotenv').config();
}
console.log(`Environment: ${process.env.NODE_ENV}`);


const usersRoute = require('./routes/users');
const rolesRoute = require('./routes/roles');

const app = express();


//settings
app.set('port', process.env.PORT || 3000);


//middlewares 
app.use(morgan('dev')); 
app.use(cors()); 
app.use(express.json());


//server
app.listen(app.get('port'), () => {
    console.log("Server on port ", app.get('port'));
});


//routes
app.use('/api/users', usersRoute);
app.use('/api/roles', rolesRoute);





const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

// const usersRoute = require('./routes/users')
const rolesRoute = require('./routes/roles')

const app = express();    



app.set('port', process.env.PORT || 3000);

//middlewares 
app.use(morgan('dev')); 
app.use(cors()); 
app.use(express.json());

app.listen(app.get('port'));
console.log("Server on port ", app.get('port'));


// app.use('/api/users', usersRoute);
app.use('/api/roles', rolesRoute);





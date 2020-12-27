const express = require('express');
const morgan = require('morgan');
const cors = require('cors');


const app = express();    



app.set('port', process.env.PORT || 3000);

//middlewares 
app.use(morgan('dev')); 
app.use(cors()); 
app.use(express.json());

app.listen(app.get('port'));
console.log("Server on port ", app.get('port'));
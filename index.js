const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('./db.js');
const routes = require('./routes/routes')
const app = express();

app.use(bodyParser.json());
app.use(cors({origin:'localhost:2067'}))
app.listen(3000,()=>{
    console.log('server started on 3000 port.')
})
app.use('/employee', routes)

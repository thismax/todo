const express = require('express');
const cors = require('cors');
const parser = require('body-parser');
const path = require('path');
//import routes and db
const app = express();
app.use(parser.json());
app.use(parser.urlencoded());
app.use(cors());
// make sure to use routes middleware
app.use(express.static(path.resolve(__dirname, '../static')));
app.listen(1337, ()=> console.log('MAX IS LISTENING TO YOU'));
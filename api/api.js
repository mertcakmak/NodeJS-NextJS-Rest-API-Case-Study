"use strict";
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const searchController = require('./searchController');
dotenv.config();

const api = new express();
api.use(bodyParser.urlencoded({extended:false}));
api.use(bodyParser.json());

api.get('/api/search', searchController.search);
api.get('/api/clear', searchController.clear);

api.listen(5001,()=>{console.log("api started at 5001")});
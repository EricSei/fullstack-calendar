// Express requirements
import bodyParser from 'body-parser';
import compression from 'compression';
import express from 'express';
import morgan from 'morgan';
import path from 'path';
import Loadable from 'react-loadable';
import cookieParser from 'cookie-parser';
import admin  from 'firebase-admin';
import cors from 'cors';
import dotenv from 'dotenv';                                
import loader from './loader';

if (process.env.NODE_ENV === 'development') {                                 
	const result = dotenv.config();                                  
	dotenv.load();                                                   
}

const info = require('./.auth.js');
admin.initializeApp({
	credential: admin.credential.cert(info.firebase),
	databaseURL: "https://spotify-events-af226.firebaseio.com"
});


const events = require('./routes/index');
const app = express();


app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/api/v1/events', events);

app.use(express.static(path.join(__dirname +'/build/')))//serves the index.html

app.get('*', (req, res)=>{
	res.sendFile(path.join(__dirname + '/build/index.html'));
})

// catch 404 and forward to error handler
app.use(function(err, req, res, next){
	res.status(err.status || 500);
	console.log(err.message);
	res.send({
		message: err.message,
		error: err
	});
	return;
});


module.exports = app;

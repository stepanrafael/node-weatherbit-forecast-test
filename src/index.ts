import express from 'express';
import bodyParser from 'body-parser';
import getStats from './routes/get-stats';
import ErrorHandler from './services/error-handling.service';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(bodyParser.json());
app.get('/stats', getStats);
app.use(ErrorHandler);

app.listen(process.env.PORT, function(){
    console.log('Running on port ' + process.env.PORT);
});
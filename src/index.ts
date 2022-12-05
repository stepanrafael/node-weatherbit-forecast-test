import express from 'express';
import bodyParser from 'body-parser';
import getStats from './routes/get-stats';
import ErrorHandler from './services/error-handling.service';
import dotenv from 'dotenv';
import CacheService from './services/cache.service';

const app = express();
dotenv.config();
app.use(bodyParser.json());
app.use(function(req, res, next){
    new CacheService().get(req.url).then((result: any)=>{
        if(result){
            // console.log("FROM CACHE");
            res.status(200).send(result);
        }else{
            // console.log("FROM SOURCE");
            next();
        }
    });
});
app.get('/stats', getStats);
app.use(ErrorHandler);

app.listen(process.env.PORT, function(){
    console.log('Running on port ' + process.env.PORT);
});
import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('GET /');
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.send('POST /');
});

app.listen(3000, () => {
    console.log('Running on port 3000!');
});
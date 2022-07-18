const express = require('express');
const app = express();
const port = 3000;
const cron = require('node-cron');
const cors = require('cors');
const path = require('path');

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname+'/index.html'));
})

const userRouter = require('./api/user');
app.use('/user', userRouter());

app.listen(port, () =>{
    console.log('localhost:'+port);
})

function sayHello(){
    console.log('Que pasa peñita');
}

cron.schedule('* * * * *', () => {
    sayHello();
});
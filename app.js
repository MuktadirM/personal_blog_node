import express from 'express';

const app = express();
const port = 3000;
app.get('/',function(req,res){
    res.send('Hello I am here');
});


app.listen(port,function(){
    console.log('App sever started');
});
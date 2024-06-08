const express = require('express');
const app = express();
const path = require('path');
const port = 5000;

//pars
app.use(express.urlencoded({extended: true}))
//ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
//
app.set(express.static(path.join(__dirname, 'public')))

app.get('/', (req,res)=>{
    res.send('server start well!')
})
app.listen(port, ()=>{
    console.log('listening on port : 5000');
})
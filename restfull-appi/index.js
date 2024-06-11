const express = require('express');
const app = express();
const path = require('path');
const port = 5000;

//pars
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
//
app.use(express.static(path.join(__dirname, 'public')))
//post array
let postArray = [
    {
        id: "1a",
        userName: "Ali",
        content: "I love Coding."
    },
    {
        id: "2b",
        userName: "Ali",
        content: "Hard work is important to acheive success."
    },

    {
        id: "3c",
        userName: "Muhammad Saqlain",
        content: "I got selected for my 1st internship."
    }
];
// rout
app.get('/', (req, res) => {
    res.send('server start well!')
});

app.get('/posts', (req, res) => {
    res.render('index.ejs', { postArray});
});
app.get('/posts/new', (req, res) => {
    res.render('new.ejs')
});
app.post('/posts', (req, res) => {
    let { userName, content } = req.body;
    postArray.push({ userName, content });
    res.redirect('/posts')
});
app.get('/posts/:id', (req, res) => {
    let {id} = req.params;
    let post = postArray.find((p)=>id === p.id)
    res.render('show.ejs' , {post})
})
app.listen(port, () => {
    console.log('listening on port : 5000');
})
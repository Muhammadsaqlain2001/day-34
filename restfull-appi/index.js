const express = require('express');
const app = express();
const path = require('path');
const port = 5000;
const { v4: uuidv4 } = require('uuid');


//pars
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
//
app.use(express.static(path.join(__dirname, 'public')))
//post array
let posts = [
    {
        id: uuidv4(),
        userName: "Ali",
        content: "I love Coding."
    },
    {
        id: uuidv4(),
        userName: "Ali",
        content: "Hard work is important to acheive success."
    },

    {
        id: uuidv4(),
        userName: "Muhammad Saqlain",
        content: "I got selected for my 1st internship."
    }
];
// rout
app.get('/', (req, res) => {
    res.send('server start well!')
});

app.get('/posts', (req, res) => {
    res.render('index.ejs', { posts});
});
app.get('/posts/new', (req, res) => {
    res.render('new.ejs')
});
app.post('/posts', (req, res) => {
    let { userName, content } = req.body;
    let id = uuidv4();
    posts.push({id, userName, content });
    res.redirect('/posts')
});
app.get('/posts/:id', (req, res) => {
    let {id} = req.params;
    let post = posts.find((p)=>id === p.id)
    res.render('show.ejs' , {post})
})
app.patch('/posts/:id', (req,res)=>{
    let {id} = req.params;
    console.log(id)
    let newContent = req.body.content;
    let post = postArray.find((p)=> id === p.id);
    post.content = newContent;
    console.log(post);
    res.send('req successfull send')
})
app.listen(port, () => {
    console.log('listening on port : 5000');
})
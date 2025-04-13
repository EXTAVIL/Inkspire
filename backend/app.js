const express = require('express');

const app = express();


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-origin', '*');
    res.setHeader('Access-Control-Allow-Heaser', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();

})


app.use('/api/posts',(req, res, next) => {
const posts = [
    {
        id: 1,
        title: 'Post 1',
        content: 'This is the content of post 1'
    },
    {
        id: 2,
        title: 'Post 3',
        content: 'This is the content of post 2'
    }
]
res.status(200).json({
    message: 'Posts fetched succesfully',
    posts: posts
});
})

module.exports = app;
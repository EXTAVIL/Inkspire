const express = require('express');

const app = express();



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
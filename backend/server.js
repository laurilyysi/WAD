const express = require('express');
const pool = require('./database');
const cors = require('cors')
const port = process.env.PORT || 3000;

const app = express();

app.use(cors());

// The express.json() function is a built-in middleware function in Express. 
// It parses incoming requests with JSON payloads and is based on body-parser.
app.use(express.json());

//  Handling HTTP requests code will go here  

app.listen(port, () => {
    console.log("Server is listening to port " + port)
});



// get all posts (postList)
app.get('/api/posts', async(req, res) => {
    try {
        console.log("get posts request has arrived");
        const posts = await pool.query(
            "SELECT * FROM posttable"
        );
        res.json(posts.rows);
    } catch (err) {
        console.error(err.message);
    }
});

// insert post to database
app.post('/api/posts', async(req, res) => {
    try {
        console.log("a post request has arrived");
        const post = req.body;
        const newpost = await pool.query(
            "INSERT INTO posttable(\"like\", \"userPicture\", time, textcontent) values ($1, $2, $3, $4)    RETURNING*", [post.like, post.userPicture, post.time, post.textcontent]
        );
        res.json(newpost);
    } catch (err) {
        console.error(err.message);
    }
}); 

// delete post based on id
app.delete('/api/posts/:id', async(req, res) => {
    try {
        const { id } = req.params;
        console.log("delete a post request has arrived");
        const deletepost = await pool.query(
            "DELETE FROM posttable WHERE id = $1", [id]
        );
        res.json(deletepost);
    } catch (err) {
        console.error(err.message);
    }
}); 

// get only one post based on id
app.get('/api/posts/:id', async(req, res) => {
    try {
        console.log("get a post with route parameter  request has arrived");
        const { id } = req.params; 
        const posts = await pool.query(
            "SELECT * FROM posttable WHERE id = $1", [id]
        );
        res.json(posts.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
}); 



// update only one post based on id
app.put('/api/posts/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const post = req.body;
        console.log("update request has arrived");
        const updatepost = await pool.query(
            "UPDATE posttable SET (\"like\", \"userPicture\", time, textcontent) = ($2, $3, $4, $5) WHERE id = $1", [id,post.like, post.userPicture, post.time, post.textcontent])
        res.json(updatepost);
    } catch (err) {
        console.error(err.message);
    }
});
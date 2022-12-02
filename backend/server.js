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
        const newpost = await pool.query( // annab promise
            "INSERT INTO posttable(\"like\", \"userPicture\", time, textcontent) values ($1, $2, $3, $4)    RETURNING*", [post.like, post.userPicture, post.time, post.textcontent]
        );
        res.json(newpost);
    } catch (err) {
        console.error(err.message);
    }
}); 
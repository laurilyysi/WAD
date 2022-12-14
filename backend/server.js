const express = require('express');
const pool = require('./database');
const cors = require('cors')

const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const { request } = require('express');

const port = process.env.PORT || 3000;

const app = express();

app.use(cors({ origin: 'http://localhost:8080', credentials: true }));

// The express.json() function is a built-in middleware function in Express. 
// It parses incoming requests with JSON payloads and is based on body-parser.
app.use(express.json());
app.use(cookieParser());

const secret = "gdgdhdbcb770785rgdzqws";
const maxAge = 60 * 60;

const generateJWT = (id) => {
    return jwt.sign({ id }, secret, { expiresIn: maxAge })
}

// Konto loomine
app.post('/auth/signup', async (req, res) => {
    try {

        console.log("a signup request has arrived");
        const { email, password } = req.body;

        const user = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
        if (user.rows.length === 0) {

            const salt = await bcrypt.genSalt();                     // generates the salt
            const bcryptPassword = await bcrypt.hash(password, salt) // hash the password and the salt 
            const authUser = await pool.query(                       // insert the user and the hashed password into the database
                "INSERT INTO users(email, password) values ($1, $2) RETURNING*", [email, bcryptPassword]
            );
            console.log(authUser.rows[0].id);
            const token = await generateJWT(authUser.rows[0].id);    // generates a JWT by taking the user id
            res
                .status(201)
                .cookie('jwt', token, { maxAge: 6000000, httpOnly: true })
                .json({ user_id: authUser.rows[0].id })
                .send;
        } else {
            return res.status(401).json({ error: "This email is already in use" });
        }
    } catch (err) {
        console.error(err.message);
        res.status(400).send(err.message);
    }
});

// Sisse logimine
app.post('/auth/login', async (req, res) => {
    try {
        console.log("a login request has arrived");
        const { email, password } = req.body;
        const user = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
        if (user.rows.length === 0) return res.status(401).json({ error: "User is not registered" });

        //Checking if the password is correct
        const validPassword = await bcrypt.compare(password, user.rows[0].password);
        if (!validPassword) return res.status(401).json({ error: "Incorrect password" });

        const token = await generateJWT(user.rows[0].id);
        res
            .status(201)
            .cookie('jwt', token, { maxAge: 6000000, httpOnly: true })
            .json({ user_id: user.rows[0].id })
            .send;
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
});

// Authenticatemine
app.get('/auth/authenticate', async (req, res) => {
    console.log('authentication request has been arrived');
    const token = req.cookies.jwt;
    let authenticated = false; // a user is not authenticated until proven the opposite
    try {
        if (token) { //checks if the token exists
            await jwt.verify(token, secret, (err) => { //token exists, now we try to verify it
                if (err) { // not verified, redirect to login page
                    console.log(err.message);
                    console.log('token is not verified');
                    res.send({ "authenticated": authenticated }); // authenticated = false
                } else { // token exists and it is verified 
                    console.log('author is authenticated');
                    authenticated = true;
                    res.send({ "authenticated": authenticated }); // authenticated = true
                }
            })
        } else { //applies when the token does not exist
            console.log('author is not authenticated');
            res.send({ "authenticated": authenticated }); // authenticated = false
        }
    } catch (err) {
        console.error(err.message);
        res.status(400).send(err.message);
    }
});

app.get('/auth/logout', (req, res) => {
    console.log('delete jwt request arrived');
    res.status(202).clearCookie('jwt').json({ "Msg": "cookie cleared" }).send
});

//  Handling HTTP requests code will go here  
app.listen(port, () => {
    console.log("Server is listening to port " + port)
});

// Get all posts
app.get('/api/posts', async (req, res) => {
    try {
        console.log("get posts request has arrived");
        const posts = await pool.query(
            "SELECT * FROM posttable ORDER BY time DESC"
        );
        res.set("Cache-Control", "no-store=1000")
        res.json(posts.rows);
    } catch (err) {
        console.error(err.message);
    }
});

// Insert post to database
app.post('/api/posts', async (req, res) => {
    try {
        console.log("a post request has arrived");
        const post = req.body;
        const newpost = await pool.query(
            "INSERT INTO posttable(\"userPicture\", time, textcontent) values ($1, $2, $3)    RETURNING*",
            [post.userPicture, post.time, post.textcontent]
        );
        res.json(newpost);
    } catch (err) {
        console.error(err.message);
    }
});

// Delete post based on id
app.delete('/api/posts/:id', async (req, res) => {
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

// Delete all posts
app.delete('/api/posts/', async (req, res) => {
    try {
        console.log("delete all posts request has arrived");
        const deletepost = await pool.query(
            "DELETE FROM posttable"
        );
        res.json(deletepost);
    } catch (err) {
        console.error(err.message);
    }
});

// Get only one post based on id
app.get('/api/posts/:id', async (req, res) => {
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



// Update only one post based on id
app.put('/api/posts/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const post = req.body;
        const newDate = new Date(post.time);
        // newDate.setDate(newDate.getDate + 1);
        console.log(newDate)
        console.log("update request has arrived");
        const updatepost = await pool.query(
            "UPDATE posttable SET (\"userPicture\", time, textcontent) = ($2, $3, $4) WHERE id = $1",
            [id, post.userPicture, newDate, post.textcontent])
        res.json(updatepost);
    } catch (err) {
        console.error(err.message);
    }
});